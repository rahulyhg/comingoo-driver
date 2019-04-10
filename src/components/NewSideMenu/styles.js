import { Dimensions, StyleSheet, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer:{
     flex : 1,
    },
    container: {
        flex: 1,
       

        ...Platform.select({
          android: {
            width: width / 1.117, 
            height: "100%",
            resizeMode: 'cover',
          },
        }),
        
        // position : 'absolute',
        //width: width,
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
