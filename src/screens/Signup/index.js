import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { strings } from "../../i18n";
import styles from "./styles";

export default class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{strings("signup.signup")}</Text>
        <Button
          title={strings("signup.login")}
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}
