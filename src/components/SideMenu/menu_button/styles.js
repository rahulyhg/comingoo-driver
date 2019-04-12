import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export default (styles = StyleSheet.create({
  container: {
    position: "relative",
    top: -height * 0.88,
    left: -width * 0.38,
    zIndex: 30
  },
  menuButton: {
    // position: "relative",
    // top: height * 0.2,
    // left: width * 0.15
  },
  menuButtonImg: {
    height: 30,
    width: 30
  }
}));
