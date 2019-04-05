import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Item, Label, Input } from "native-base";
import { connect } from "react-redux";

import styles from "./styles";
import { colors } from "../../constants";
import { icons } from "../../utils";

import { handlers } from "../../helpers";

import { strings } from "../../i18n";

export class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberError: false,
      number: ""
    };
  }

  static navigationOptions = () => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

  resetPassword = () => {
    const { number, password } = this.state;
    if (!number) {
      this.setState({
        numberError: !number
      });
      return handlers.showToast(
        strings("forgot_password.missing_phone_number"),
        "danger"
      );
    }

    handlers.showToast(strings("forgot_password.success_sent_sms"), "success");
    this.navigate("Login");
  };

  navigate = route => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  render() {
    const { numberError, number } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}>
            {strings("forgot_password.reset_your_password")}
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.fieldContainer}>
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
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.nextBtn} onPress={this.resetPassword}>
            <Image style={styles.btnImage} source={icons.right_arrow} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPassword);
