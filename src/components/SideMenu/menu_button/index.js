import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { DrawerActions } from "react-navigation-drawer";

import { icons } from "../../../utils/index";
import styles from "./styles";

class MenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    console.log("TCL: MenuButton -> render -> navigation", navigation);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        >
          <Image source={icons.menubutton} style={styles.menuButtonImg} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MenuButton;
