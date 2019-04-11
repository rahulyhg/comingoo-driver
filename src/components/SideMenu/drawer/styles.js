import {
    StyleSheet,
    Dimensions,
    Platform
  } from 'react-native';
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        left : Platform.OS === 'ios' ? width/12.7 : width/7.5,
    },
    menuItem: {
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 10,
        margin: Platform.OS === 'ios' ? 15 : 10, 
      },
    menuImage: {
        height : Platform.OS === 'ios' ? 35 : 30,
        width : Platform.OS === 'ios' ? 35 : 30,
    },  
    menuItemText: {
        fontSize: Platform.OS === 'ios' ? width/19 : width/20, 
        fontWeight: Platform.OS === 'ios' ? '500' : '200',
        margin:10,
        color : 'white'
      }
});
