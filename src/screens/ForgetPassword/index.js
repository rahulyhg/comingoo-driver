import React from "react";
import { Text, View, TouchableOpacity, Image, Platform } from "react-native";
import { connect } from "react-redux";
import { Item, Label, Input } from "native-base";
import firebase from "react-native-firebase";

import { handlers } from "../../helpers";
import { confirmCode, signIn } from '../../config/firebase'

import styles from "./styles";
import { colors } from "../../constants";
import { icons } from "../../utils";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      numberError: false,
      number: "",
      otp: "",
      passwordError: false,
      password: "",
      cPassword: "",
      showPassword: false,
      confirmResult: null
    };
  }

  static navigationOptions = () => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

  componentDidMount() {
    // signOut();
  }

  next = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  sendOTP = async () => {
    const { number } = this.state;

    if (!number) {
      this.setState({
        numberError: !number
      });
      return handlers.showToast(
        "S'il vous plait, entrez votre numéro de téléphone!",
        "danger"
      );
    }

    try {
      if (Platform.OS == 'android') {
        this.verifyPhoneNumber(number);
      } else {
        const confirmResult = await signIn(number);
        this.setState({ confirmResult })
        this.next()
      }
    } catch (error) {
      console.log("TCL: Signup -> sendOTP -> error", error);
      handlers.showToast(error.message, "danger");
    }
  };

  verifyPhoneNumber = async phoneNumber => {
    firebase
      .auth()
      .verifyPhoneNumber(phoneNumber)
      .on(
        "state_changed",
        phoneAuthSnapshot => {
          console.log("TCL: phoneAuthSnapshot", phoneAuthSnapshot);
          this.setState({ confirmResult: phoneAuthSnapshot })
          switch (phoneAuthSnapshot.state) {
            case firebase.auth.PhoneAuthState.CODE_SENT: // or 'sent'
              handlers.showToast("Code send!", "success");
              this.next();
              break;
            case firebase.auth.PhoneAuthState.ERROR: // or 'error'
              console.log("verification error");
              console.log(phoneAuthSnapshot.error);
              handlers.showToast("something went wrong! try again!", "danger");
              break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
              console.log("auto verify on android timed out");
              handlers.showToast("auto verify on android timed out", "info");
              break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFIED: // or 'verified'
              handlers.showToast("auto verify on android", "success");
              console.log(phoneAuthSnapshot.code);
              this.setState({ otp: phoneAuthSnapshot.code || "" });
              console.log(phoneAuthSnapshot);
              this.next();
              break;
          }
        },
        error => {
          handlers.showToast(error.message, "danger");
          console.log(error.verificationId);
        },
        phoneAuthSnapshot => {
          console.log(phoneAuthSnapshot);
        }
      );
  };

  verifyOTP = async () => {
    const { otp, confirmResult } = this.state
    if (!otp) {
      return handlers.showToast(
        "S'il vous plaît entrez d'abord OTP",
        "danger"
      );
    }

    const payload = {
      confirmResult, otp
    }
    try {
      const user = await confirmCode(payload)
      console.log(user)
      this.next()
    } catch (error) {
      console.log('error', error)
      handlers.showToast(error.message, 'danger')
    }
  }

  newPassword = () => {
    const { passwordError, password, cPassword, showPassword } = this.state;
    return (
      <View style={[styles.fieldContainer, styles.newPassword]}>
        <View stackedLabel style={styles.inputs}>
          <Label style={styles.labelStyle}>Mot de passe</Label>
          <Item>
            <Input
              style={styles.inputStyle}
              onChangeText={password => this.setState({ password })}
              value={password}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => this.setState({ showPassword: !showPassword })}
            >
              <Image source={icons.eye_icon} style={styles.iconStyle} />
            </TouchableOpacity>
          </Item>
          <Label style={[styles.labelStyle, { marginTop: "4%" }]}>
            Retaper le mot de passe
          </Label>
          <Item>
            <Input
              style={styles.inputStyle}
              onChangeText={cPassword => this.setState({ cPassword })}
              value={cPassword}
              secureTextEntry={true}
            />
          </Item>
        </View>
        <TouchableOpacity
          style={[styles.nextBtn, { alignSelf: "center" }]}
          onPress={this.next}
        >
          <Image style={styles.btnImage} source={icons.right_arrow} />
        </TouchableOpacity>
      </View>
    );
  };

  numberInput = () => {
    const { number, numberError } = this.state;
    return (
      <View style={styles.numberContainer}>
        <Item stackedLabel style={styles.inputs} error={numberError}>
          <Label style={styles.labelStyle}>Numéro de téléphone</Label>
          <Input
            style={styles.inputStyle}
            keyboardType="phone-pad"
            value={number}
            onChangeText={number => this.setState({ number })}
            error
          />
        </Item>
        <TouchableOpacity style={styles.nextBtn} onPress={this.sendOTP}>
          <Image style={styles.btnImage} source={icons.right_arrow} />
        </TouchableOpacity>
      </View>
    );
  };

  otpInput = () => {
    const { otp } = this.state;
    return (
      <View style={styles.numberContainer}>
        <Item stackedLabel style={styles.inputs}>
          <Label style={styles.labelStyle}>OTP</Label>
          <Input
            style={styles.inputStyle}
            keyboardType="number-pad"
            value={otp}
            onChangeText={otp => this.setState({ otp })}
            error
          />
        </Item>
        <TouchableOpacity style={styles.nextBtn} onPress={this.verifyOTP}>
          <Image style={styles.btnImage} source={icons.right_arrow} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { step } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}> 
            {step == 1
              ? "réinitialisez votre mot de passe"
              : step == 2
                ? "réinitialisez votre mot de passe"
                : "Entrez votre nouveau mot de passe"}
          </Text>
        </View>
        <View style={styles.middleContainer}>
          {step == 1
            ? this.numberInput()
            : step == 2
              ? this.otpInput()
              : this.newPassword()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
