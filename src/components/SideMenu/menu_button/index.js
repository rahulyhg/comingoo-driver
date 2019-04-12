import React from 'react';
import { Image, TouchableOpacity} from "react-native";
import {icons} from '../../../utils/index';
import styles from './styles'

class MenuButton extends React.Component{
render(){
    return(
        <TouchableOpacity
        style={styles.menuButton}
        onPress={() => this.props.navigation.toggleDrawer()}
        >
        <Image
        source={icons.menubutton}
        style={styles.menuButtonImg}
       />
        </TouchableOpacity>

    )
}
}


export default MenuButton;
