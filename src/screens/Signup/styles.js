import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

import { colors } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
