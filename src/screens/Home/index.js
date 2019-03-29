import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Rocket from "../../assets/images/rocket.gif";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Rocket} style={styles.welcomeImage} />
        <Text style={styles.welcomeText}>Hello Comingoo !!</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  welcomeImage: {
    height: 100,
    width: 100
  },

  welcomeText: {
    fontSize: 20
  }
});
