import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { colors } from "../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.88,
    backgroundColor: colors.bluePrimary
    //backgroundColor : (Platform.OS === 'ios') ? 'red' : 'green'
  },

  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: height * 0.1,
    flex: 1.3
  },

  headingTxt: {
    fontSize: width * 0.13,
    fontWeight: "200",
    color: "white"
  },

  subHeadingTxt: {
    fontSize: Platform.OS === "ios" ? 15 : 18,
    paddingTop: 40,
    paddingLeft: Platform.OS === "ios" ? 3 : 2,
    color: "#E5E5E5",
    textAlign: "center"
  },

  middleContainer: {
    flex: 2.8,
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between"
  },

  fieldContainer: {
    width: "80%"
  },

  labelStyle: {
    color: colors.light,
    fontSize: width * 0.04
  },

  inputs: {
    marginTop: "10%"
  },

  inputStyle: {
    color: colors.light
  },

  nextBtn: {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    marginBottom: height * 0.3,
    marginLeft: 5
  },

  backBtn: {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    marginBottom: height * 0.3,

    marginRight: 5
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1
  },

  btnImage: {
    width: "80%",
    height: "60%"
  },
  btnImageLeft: {
    width: "80%",
    height: "60%",
    transform: [{ rotate: "180deg" }]
  }
});
