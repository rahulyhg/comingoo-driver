import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

import { colors } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    
  },
  headerStyle: {
    backgroundColor: colors.bluePrimary,
    elevation: 0,
    shadowOpacity: 0
  },
  
});
