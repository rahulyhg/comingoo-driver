import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { onLogin } from "../../store/auth/actions";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  login = () => {
    const { onLogin } = this.props;
    onLogin();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Login Screen </Text>
        <Button title="Login" onPress={this.login} />
        <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate("Signup")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(onLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
