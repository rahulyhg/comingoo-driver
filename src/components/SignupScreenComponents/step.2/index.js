import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Item, Label, Input, Toast } from "native-base";
import { icons } from "../../../utils/";

import { handlers } from "../../../helpers";
import { confirmCode } from "../../../config/firebase";

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
      confirmResult: null
    };
  }

  componentDidMount() {
    const confirmResult = this.props.getState()[0];
    this.setState({ confirmResult });
    console.log(
      "TCL: Step2 -> componentDidMount -> confirmResult",
      confirmResult
    );
  }

  verifyOTP = async () => {
    const { otp, confirmResult } = this.state;

    if (!otp) {
      return handlers.showToast("S'il vous plaît entrez d'abord OTP", "danger");
    }

    const payload = {
      confirmResult,
      otp
    };
    try {
      const user = await confirmCode(payload);
      this.props.nextFn();
    } catch (error) {
      console.log("error", error);
      handlers.showToast(error.message, "danger");
    }
  };

  back = () => {
    this.props.prevFn();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}>Sign up</Text>
          <Text style={styles.subHeadingTxt}>
            A verification code has been sent to your phone number, please enter
            it bellow to continue.
          </Text>
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.fieldContainer}>
            <Item stackedLabel style={styles.inputs}>
              <Label style={styles.labelStyle}>OTP</Label>
              <Input
                style={styles.inputStyle}
                keyboardType="phone-pad"
                onChangeText={otp => this.setState({ otp })}
              />
            </Item>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.back()}>
            <Image style={styles.btnImageLeft} source={icons.right_arrow} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => this.verifyOTP()}
          >
            <Image style={styles.btnImage} source={icons.right_arrow} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
