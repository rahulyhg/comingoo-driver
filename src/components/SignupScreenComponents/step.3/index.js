import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Item, Label, Input, Toast } from "native-base";

import { handlers, validations } from "../../../helpers";
import styles from "./styles";
import { icons } from "../../../utils/";

export default class Step3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  next = () => {
    const { name, email, password, confirmpassword } = this.state;
    const data = this.props.getState()[1];

    try {
      if (!name && !email && !password && !confirmpassword) {
        throw { message: "Please fill all fields!" };
      }
      if (password.length < 6) {
        throw { message: "your password must be 6 characters long!" };
      }
      if (password !== confirmpassword) throw { message: "password mismatch" };

      if (!validations.validateEmail(email)) {
        throw { message: "Please enter a proper email" };
      }

      data.fullName = name;
      data.email = email;
      data.password = password;
      this.props.saveState(1, data);
      this.props.nextFn();
    } catch (error) {
      handlers.showToast(error.message, "danger");
    }
  };

  back = () => {
    this.props.prevFn();
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.headingTxt}>Sìnserire</Text>
            <Text style={styles.subHeadingTxt}>
              Remplissez les champs si-dessous
            </Text>
          </View>

          <View style={styles.middleContainer}>
            <View style={styles.fieldContainer}>
              <Item stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>Nom complet</Label>
                <Input
                  style={styles.inputStyle}
                  onChangeText={name => this.setState({ name })}
                />
              </Item>
              <Item stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>Email</Label>
                <Input
                  style={styles.inputStyle}
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>Mot de passe</Label>
                <Input
                  style={styles.inputStyle}
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
              <Item stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>
                  Confirmer le mot de passe
                </Label>
                <Input
                  style={styles.inputStyle}
                  secureTextEntry={true}
                  onChangeText={confirmpassword =>
                    this.setState({ confirmpassword })
                  }
                />
              </Item>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.back()}
            >
              <Image style={styles.btnImageLeft} source={icons.right_arrow} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => this.next()}
            >
              <Image style={styles.btnImage} source={icons.right_arrow} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
