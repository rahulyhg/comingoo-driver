import {
    StyleSheet,
    Dimensions,
    Platform
  } from 'react-native';
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
      flexDirection:'row', 
      marginTop: Platform.OS === 'ios' ? width/10 : height/270
    },
    profileImage: {
      margin:15, 
      height: Platform.OS === 'ios' ? height/10.8 : height/10, 
      width: Platform.OS === 'ios' ? width/5 : width/6, 
      borderColor:'white', 
      borderWidth: Platform.OS === 'ios' ? 2 : 2, 
      borderRadius: Platform.OS === 'ios' ? 35 : 1000, 
      ...Platform.select({
        android: {
         left : width/11.5
        },
        }),
      },
    subContainer: {
      ...Platform.select({
        ios: {
        marginTop : height/29,
        },
      android: {
       left : width/11.5,
       marginTop : height/26,
      },
      }),
    },  
    userName: {
      fontWeight: Platform.OS === 'ios' ? '500' : '200',   
      fontSize: Platform.OS === 'ios' ? width*0.06 : width*0.05,   
      color:'#fff'
      },
    ratingImg: {
      flex:1, 
      height: Platform.OS === 'ios' ? height/45 : height/30,   
      width: width/6
    },
    ratingText: {
      position: 'absolute', 
      paddingLeft: 30
    }
});
