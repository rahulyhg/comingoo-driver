import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { colors } from "../../../constants";

export default StyleSheet.create({
 container: {
    flex: 1,
    height : height,
    backgroundColor: colors.bluePrimary
     //backgroundColor : (Platform.OS === 'ios') ? 'red' : 'green'
  },

  topContainer: {
   paddingLeft : width * 0.09 ,
   paddingTop: height * 0.02,
    
  },

  headingTxt: {
    fontSize : width * 0.13,
   fontWeight: '200',
    color : 'white',
  },

  subHeadingTxt: {
    fontSize : 17,
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
    bottom:  (Platform.OS === 'ios') ? height * 0.25 : 10,
    marginLeft : 5,
  },

  backBtn : {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    bottom:  (Platform.OS === 'ios') ? height * 0.25 : 10,
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
