import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
        // position : 'absolute',
        // width : width/1.34,
        // height : height,
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
