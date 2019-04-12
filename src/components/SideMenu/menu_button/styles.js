import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export default styles = StyleSheet.create({
    menuButton : {
        zIndex: 9,
        position: 'absolute',
        top: height/20,
        left: width/15,
        
    },
    menuButtonImg : {
        height : 30,
        width : 30
    }
 
});
