import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
import { colors } from "../../../constants";

export default StyleSheet.create({
 container: {
    flex: 1,
    height: height,
    backgroundColor: colors.bluePrimary
  },

  topContainer: {
    justifyContent: 'center',
    alignItems : 'center',
    paddingTop : height * 0.10
    
  },

  headingTxt: {
    fontSize : width * 0.13,
   fontWeight: '200',
    color : 'white',
  },

  subHeadingTxt: {
    fontSize : 15,
    paddingTop: 40,
    paddingLeft: 3,
    color : '#E5E5E5',
    
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
    marginBottom: height * 0.30,
    marginLeft : 5
  },

  backBtn : {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    marginBottom: height * 0.30,
    marginRight : 5
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },

  btnImage: {
    width: "80%",
    height: "60%",
   
  },
  btnImageLeft: {
    width: "80%",
    height: "60%",
    transform: [{ rotate: '180deg'}]
  }
});
