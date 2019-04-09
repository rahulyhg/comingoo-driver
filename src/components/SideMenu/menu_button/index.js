import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import {icons} from '../../../utils/index'

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

const styles = StyleSheet.create({
    menuButton : {
        zIndex: 9,
        position: 'absolute',
        top: 45,
        left: 25,
        
    },
    menuButtonImg : {
        height : 30,
        width : 30
    }
})

export default MenuButton;