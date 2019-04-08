import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Item, Label, Input, Toast } from "native-base";
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
    if (
      this.state.name &&
      this.state.email &&
      this.state.password &&
      this.state.confirmpassword != ""
    ) {
      // Save step state for use in other steps of the wizard
      this.props.saveState(0, { key: "value" });

      // Go to next step
      this.props.nextFn();
    } else {
      return Toast.show({
        text: "One of the field is missing",
        type: "warning",
        duration: 3000,
        buttonText: "Okay"
      });
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
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
              <Item stackedLabel style={styles.inputs}>
                <Label style={styles.labelStyle}>
                  Confirmer le mot de passe
                </Label>
                <Input
                  style={styles.inputStyle}
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
