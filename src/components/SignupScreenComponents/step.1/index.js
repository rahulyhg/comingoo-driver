import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Item, Label, Input, Toast } from "native-base";

import { icons } from "../../../utils/";
import { handlers } from "../../../helpers";
import styles from "./styles";

import {
  resetErrorAndLoading,
  stopOrStartLoader
} from "../../../store/auth/actions";
import { signIn } from "../../../config/firebase";

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: "",
      confirmResult: null
    };
  }

  componentDidMount() {
    const data = this.props.getState()[1] || {};
    this.setState({
      phoneNumber: data.phoneNumber || ""
    });
  }

  sendOTP = async () => {
    const { phoneNumber } = this.state;
    const { reset, handleLoader } = this.props;

    if (!phoneNumber) {
      this.setState({
        numberError: !phoneNumber
      });
      return handlers.showToast(
        "S'il vous plait, entrez votre numéro de téléphone!",
        "danger"
      );
    }

    handleLoader();

    try {
      const confirmResult = await signIn(number);
      this.props.saveState("0", confirmResult);
      this.props.saveState("1", { phoneNumber: phoneNumber });
      reset();
      this.props.nextFn();
    } catch (error) {
      console.log("TCL: Signup -> sendOTP -> error", error);
      reset();
      handlers.showToast(error.message, "danger");
    }
  };

  updateProps = (key, value) => {
    const data = this.props.getState()[1] || {};
    data[key] = value;
    this.props.saveState("1", data);
    this.setState({ [key]: value });
  };

  render() {
    const { phoneNumber } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}>Sign up</Text>
          <Text style={styles.subHeadingTxt}>Enter your phone number</Text>
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.fieldContainer}>
            <Item stackedLabel style={styles.inputs}>
              <Label style={styles.labelStyle}>Phone number</Label>
              <Input
                style={styles.inputStyle}
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={number => this.updateProps("phoneNumber", number)}
              />
            </Item>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => this.sendOTP()}
          >
            <Image style={styles.btnImage} source={icons.right_arrow} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleLoader: () => dispatch(stopOrStartLoader()),
  reset: () => dispatch(resetErrorAndLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1);
