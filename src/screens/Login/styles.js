import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

import { colors } from "../../constants";

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.bluePrimary,
    elevation: 0,
    shadowOpacity: 0
  },
  container: {
    flex: 1,
    backgroundColor: colors.bluePrimary
  },
  topContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center"
  },
  middleContainer: {
    flex: 2.8,
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between"
  },
  bottomContainer: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  headingTxt: {
    color: colors.light,
    fontSize: width * 0.12
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
  }
});
