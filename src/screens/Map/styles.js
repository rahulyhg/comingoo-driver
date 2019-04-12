import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    acIndicator:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})
