import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
import { colors } from "../../../constants";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.bluePrimary,
    flex: 1,
    height: height * 0.96
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  middleContainer: {
    flex: 1.6
  },
  bottomContainer: {
    flex: 1
  },
  headingTxt: {
    textAlign: "center",
    fontSize: width * 0.08,
    fontWeight: "200",
    color: "white",
    paddingHorizontal: width * 0.01
  },
  img: {
    width: width * 0.4,
    height: height * 0.3
  },
  subHeadingTxt: {
    fontSize: 17,
    paddingTop: 5,
    paddingLeft: 3,
    color: "#E5E5E5",
    textAlign: "center"
  },

  // middleContainer: {
  //   flex: 2.8,
  //   alignItems: "center",
  //   position: "relative",
  //   justifyContent: "space-between"
  // },

  fieldContainer: {
    width: "80%"
  },

  labelStyle: {
    color: colors.light,
    fontSize: width * 0.04
  },

  labelStyleDropdown: {
    color: colors.light,
    fontSize: width * 0.04,
    paddingTop: 20
  },

  inputs: {
    marginTop: "10%"
  },

  inputStyle: {
    color: colors.light
  },

  upBtn: {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    marginBottom: height * 0.06
  },

  nextBtn: {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    marginBottom: height * 0.16,
    marginLeft: 5
  },

  backBtn: {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    marginBottom: height * 0.16,
    marginRight: 5
  },

  btnImage: {
    width: "80%",
    height: "60%"
  },

  btnImageLeft: {
    width: "80%",
    height: "60%",
    transform: [{ rotate: "180deg" }]
  },
  imageWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  uploadBtnContainer: {
    alignItems: "center"
  },
  navBtns: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
