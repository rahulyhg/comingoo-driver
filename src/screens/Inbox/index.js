import React, { Component } from "react";
import { View, Text} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { colors } from "../../constants";
import MenuBtn from '../../components/SideMenu/menu_button';

export class Inbox extends Component {
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
         Inbox
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
)(Inbox);
