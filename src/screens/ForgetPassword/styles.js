import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.bluePrimary,
    height: height * 0.9
  },
  headerStyle: {
    backgroundColor: colors.bluePrimary,
    elevation: 0,
    shadowOpacity: 0
  },
  topContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center"
  },
  middleContainer: {
    flex: 2.8,
    alignItems: "center",
    justifyContent: "space-between"
  },
  bottomContainer: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  headingTxt: {
    color: colors.light,
    fontSize: width * 0.1,
    paddingHorizontal: width * 0.06,
    textAlign: "center"
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
  forgetTxtContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.02
  },
  smallTxt: {
    color: colors.light,
    fontSize: width * 0.034
  },
  mediumTxt: {
    color: colors.light,
    fontSize: width * 0.046
  },
  iconStyle: {
    width: 30,
    height: 30
  },
  eyeButton: {
    alignItems: "center"
  },
  nextBtn: {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    marginBottom: height * 0.06
  },
  btnImage: {
    width: "80%",
    height: "60%"
  },
  numberContainer: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between"
  },
  inputStyle: {
    width: width * 0.8,
    color: colors.light
  },
  newPassword: {
    flex: 1,
    justifyContent: "space-between"
  }
});
