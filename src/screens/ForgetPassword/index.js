import React from "react";
import { Text, View, TouchableOpacity, Image, Platform } from "react-native";
import { connect } from "react-redux";
import { Item, Label, Input } from "native-base";
import firebase from "react-native-firebase";

import { handlers } from "../../helpers";
import { confirmCode, signIn } from "../../config/firebase";

import styles from "./styles";
import { colors } from "../../constants";
import { icons } from "../../utils";
import {
  onReset,
  stopOrStartLoader,
  resetErrorAndLoading
} from "../../store/auth/actions";
import { strings } from "../../i18n";

class ForgetPassword extends React.Component {
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
      confirmResult: null,
      loader: false
    };
  }

  static navigationOptions = () => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

  next = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });

  };

  componentWillReceiveProps = nextProps => {
    const { successMessage, error, loader, reset } = nextProps;
    if (successMessage) {
      this.props.navigation.navigate("Login");
      handlers.showToast(successMessage, "success");
      return reset();
    }
    if (error) {
      return handlers.showToast(error, "danger");
    }
    if (loader != this.state.loader) {
      this.setState({ loader });
    }
  };

  resetPassword = async () => {
    const { handleResetRequest } = this.props;
    const payload = {
      phoneNumber: this.state.number,
      password: this.state.password
    };
    await handleResetRequest(payload);
  };

  sendOTP = async () => {
    const { number } = this.state;
    const { hanldeLoader, reset } = this.props;

    if (!number) {
      this.setState({
        numberError: !number
      });
      return handlers.showToast(
        strings("forgot_password.phone_number_error"),
        "danger",
        5000
      );
    }

    hanldeLoader();

    try {
      const confirmResult = await signIn(number);
      this.setState({ confirmResult });
      this.next();
      reset();
    } catch (error) {
      reset();
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
          this.setState({ confirmResult: phoneAuthSnapshot });
          switch (phoneAuthSnapshot.state) {
            case firebase.auth.PhoneAuthState.CODE_SENT: // or 'sent'
              handlers.showToast(
                strings("forgot_password.code_send"),
                "success"
              );
              this.next();
              break;
            case firebase.auth.PhoneAuthState.ERROR: // or 'error'
              console.log("verification error");
              console.log(phoneAuthSnapshot.error);
              handlers.showToast(
                strings("forgot_password.try_again"),
                "danger"
              );
              break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
              handlers.showToast("auto verify on android timed out", "info");
              break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFIED: // or 'verified'
              this.setState({ otp: phoneAuthSnapshot.code || "" });
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
    const { otp, confirmResult } = this.state;
    const { hanldeLoader, reset } = this.props;
    if (!otp) {
      return handlers.showToast(
        strings("forgot_password.otp_error"),
        "danger",
        5000
      );
    }
    hanldeLoader();

    const payload = {
      confirmResult,
      otp
    };
    try {
      const user = await confirmCode(payload);
      console.log(user);
      reset();
      this.next();
    } catch (error) {
      console.log("error", error);
      reset();
      handlers.showToast(error.message, "danger");
    }
  };

  newPassword = () => {
    const { passwordError, password, cPassword, showPassword } = this.state;
    return (
      <View style={[styles.fieldContainer, styles.newPassword]}>
        <View stackedLabel style={styles.inputs}>
          <Label style={styles.labelStyle}>
            {strings("forgot_password.new_password")}
          </Label>
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
            {strings("forgot_password.confirm_new_password")}
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
          onPress={this.resetPassword}
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
          <Label style={styles.labelStyle}>
            {strings("forgot_password.phone_number")}
          </Label>
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
    const { step, loader } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}>
            {step == 1
              ? strings("forgot_password.reset_your_password")
              : step == 2
              ? strings("forgot_password.reset_your_password")
              : strings("forgot_password.missing_phone_number")}
          </Text>
        </View>
        <View style={styles.middleContainer}>
          {step == 1
            ? this.numberInput()
            : step == 2
            ? this.otpInput()
            : this.newPassword()}
        </View>
        {loader && handlers.overlayLoader()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  message: state.authReducer.successMessage,
  error: state.authReducer.error,
  loader: state.authReducer.loader
});

const mapDispatchToProps = dispatch => ({
  handleResetRequest: payload => dispatch(onReset(payload)),
  hanldeLoader: () => dispatch(stopOrStartLoader()),
  reset: () => dispatch(resetErrorAndLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPassword);
