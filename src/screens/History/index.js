import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Item, Label, Input } from "native-base";
import { connect } from "react-redux";

import styles from "./styles";
import { colors } from "../../constants";
import { icons } from "../../utils";

import { handlers } from "../../helpers";
import MenuBtn from '../../components/SideMenu/menu_button';

export class History extends Component {
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

  navigate = route => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  render() {
    const { numberError, number } = this.state;
    return (
      <View style={styles.container}>
      <MenuBtn navigation={this.props.navigation} />
        <Text>
         History
        </Text>
      </View>

    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
