import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export default styles = StyleSheet.create({
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
 
});
