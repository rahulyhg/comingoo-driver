import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Item, Label, Input } from "native-base";
import { connect } from "react-redux";

import styles from "./styles";
import { icons } from "../../../utils/";

import {
  resetErrorAndLoading,
  stopOrStartLoader
} from "../../../store/auth/actions";
import { handlers } from "../../../helpers";
import { confirmCode } from "../../../config/firebase";

class Step2 extends React.Component {
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
    const { handleLoader, reset } = this.props;

    if (!otp) {
      return handlers.showToast("S'il vous plaît entrez d'abord OTP", "danger");
    }

    handleLoader();
    const payload = {
      confirmResult,
      otp
    };
    try {
      const user = await confirmCode(payload);
      reset();
      this.props.nextFn();
    } catch (error) {
      console.log("error", error);
      reset();
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleLoader: () => dispatch(stopOrStartLoader()),
  reset: () => dispatch(resetErrorAndLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step2);
