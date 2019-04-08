import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Item, Label, Input } from "native-base";

import { onLogin } from "../../store/auth/actions";

import styles from "./styles";
import { colors } from "../../constants";
import { icons } from "../../utils";
import { handlers } from "../../helpers";
import { strings } from "../../i18n";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: true,
      number: "",
      password: "",
      passwordError: false,
      numberError: false
    };
  }

  static navigationOptions = navigation => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

  login = () => {
    const { number, password } = this.state;
    if (!number || !password) {
      this.setState({
        numberError: !number,
        passwordError: !password
      });
      return handlers.showToast("Veuillez remplir tous les champs!", "danger");
    }
    else {
      this.navigate("Dashboard");

      return handlers.showToast(strings("login.missing_input"), "danger");
    }

    const { onLogin } = this.props;
    onLogin();
  };

  navigate = route => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  render() {
    const {
      showPassword,
      number,
      password,
      passwordError,
      numberError
    } = this.state;
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.headingTxt}>{strings('login.login')}</Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.fieldContainer}>
              <Item stackedLabel style={styles.inputs} error={numberError}>
                <Label style={styles.labelStyle}>{strings('login.phone_number')}</Label>
                <Input
                  style={styles.inputStyle}
                  keyboardType="phone-pad"
                  value={number}
                  onChangeText={number => this.setState({ number })}
                  error
                />
              </Item>
              <View stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>{strings('login.password')}</Label>
                <Item error={passwordError}>
                  <Input
                    style={styles.inputStyle}
                    onChangeText={password => this.setState({ password })}
                    value={password}
                    secureTextEntry={showPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() =>
                      this.setState({ showPassword: !showPassword })
                    }
                  >
                    <Image source={icons.eye_icon} style={styles.iconStyle} />
                  </TouchableOpacity>
                </Item>
              </View>
              <View style={styles.forgetTxtContainer}>
                <Text style={styles.smallTxt}>{strings('login.forgot_password')}</Text>
                <TouchableOpacity
                  onPress={() => this.navigate("ForgetPassword")}
                >
                  <Text style={styles.mediumTxt}>{strings('login.click_here')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.nextBtn} onPress={this.login}>
                <Image style={styles.btnImage} source={icons.right_arrow} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(onLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
