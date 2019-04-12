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
      fullName: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  componentDidMount() {
    const data = this.props.getState()[1] || {};
    console.log("TCL: Step3 -> componentDidMount -> data", data);
    this.setState({
      fullName: data.fullName || "",
      email: data.email || "",
      password: data.password || "",
      confirmpassword: data.password || ""
    });
  }

  next = () => {
    const { fullName, email, password, confirmpassword } = this.state;
    const data = this.props.getState()[1] || {};

    try {
      if (!fullName && !email && !password && !confirmpassword) {
        throw { message: "Please fill all fields!" };
      }
      if (password.length < 6) {
        throw { message: "your password must be 6 characters long!" };
      }
      if (password !== confirmpassword) throw { message: "password mismatch" };

      if (!validations.validateEmail(email)) {
        throw { message: "Please enter a proper email" };
      }

      data.fullName = fullName;
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

  updateProps = (key, value) => {
    const data = this.props.getState()[1] || {};
    data[key] = value;
    this.props.saveState("1", data);
    this.setState({ [key]: value });
  };

  render() {
    const { email, password, fullName, confirmpassword } = this.state;
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
                  value={fullName}
                  onChangeText={fullName =>
                    this.updateProps("fullName", fullName)
                  }
                />
              </Item>
              <Item stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>Email</Label>
                <Input
                  style={styles.inputStyle}
                  value={email}
                  keyboardType="email-address"
                  onChangeText={email => this.updateProps("email", email)}
                />
              </Item>
              <Item stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>Mot de passe</Label>
                <Input
                  style={styles.inputStyle}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={password =>
                    this.updateProps("password", password)
                  }
                />
              </Item>
              <Item stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>
                  Confirmer le mot de passe
                </Label>
                <Input
                  style={styles.inputStyle}
                  secureTextEntry={true}
                  value={confirmpassword}
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
