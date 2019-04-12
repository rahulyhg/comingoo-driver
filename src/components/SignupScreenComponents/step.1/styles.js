import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { colors } from "../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.8646,
    backgroundColor: colors.bluePrimary
    //backgroundColor : (Platform.OS === 'ios') ? 'red' : 'green'
  },

  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: height * 0.09
    flex: 1
  },

  headingTxt: {
    fontSize: width * 0.13,
    paddingTop: height * 0.14,
    fontWeight: "200",
    color: "white"
  },

  subHeadingTxt: {
    fontSize: 17,
    paddingTop: 3,
    paddingLeft: 3,
    color: "#E5E5E5"
  },

  middleContainer: {
    flex: 2.8,
    alignItems: "center",
    marginTop: height * 0.1
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
    marginBottom: height * 0.3
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center"
  },

  btnImage: {
    width: "80%",
    height: "60%"
  }
});
