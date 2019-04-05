import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { colors } from "../../../constants";

export default StyleSheet.create({
  
 container: {
    flex: 1,
    backgroundColor: colors.bluePrimary,
    ...Platform.select({
      ios: {
       height : height
      },
      android: {
       
      },
    }),
  },

  topContainer: {
   paddingLeft : width * 0.09 ,
   paddingTop: height * 0.02,
    
  },

  headingTxt: {
    fontSize : width * 0.10,
   fontWeight: '200',
    color : 'white',
  },

  middleContainer: {
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

  labelStyleDropdown : {
    color: colors.light,
    fontSize: width * 0.04,
    paddingTop : 20,
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
    //bottom:  (Platform.OS === 'ios') ? height * 0.16 : 0,
    marginLeft : 5,
  },

  backBtn : {
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    //bottom:  (Platform.OS === 'ios') ? height * 0.16 : 0,
    marginRight : 5
  },

  bottomContainer: {
    
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    paddingTop : (Platform.OS === 'ios') ?  25 : 25,
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
