import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Item, Label, Input, Toast } from "native-base";
import { icons } from "../../../utils/";
import { handlers } from "../../../helpers/index";

import { signIn } from "../../../config/firebase";

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: "",
      confirmResult: null
    };
  }
  componentDidMount() {
    this.props.saveState("1", "asnoiadiaod");
  }

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
      const confirmResult = await signIn(number);
      this.props.saveState("0", confirmResult);
      this.props.nextFn();
    } catch (error) {
      console.log("TCL: Signup -> sendOTP -> error", error);
      handlers.showToast(error.message, "danger");
    }
  };

  render() {
    const { number } = this.state;
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
                onChangeText={number => this.setState({ number })}
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
