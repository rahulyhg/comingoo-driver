import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants";

const { width, height } = Dimensions.get("window");
import drawer_bg from '../../assets/images/menubg.png';

export default StyleSheet.create({
    container: {
        flex: 1,
       
      },
      menuItem: {
        flexDirection:'row',
        color : 'white',
      },
      menuItemText: {
        fontSize:17,
        fontWeight:'500',
        margin:15,
        color : 'white'
      },
      secondContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center',
        top: 30
      },
      logout : {
        flex : 0.10,
        
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 0.7,
        borderTopColor: 'white',
      }
});
