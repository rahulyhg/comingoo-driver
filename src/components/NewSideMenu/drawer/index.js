import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ListView,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get("window");

const DrawerItem = ({ icon, navigation, name, screenName }) =>
<View style={{
  left : width/8
}}>
<TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })}
  >
    <Image source={icon} style={{height : 35, width : 35}} />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
</View>
  


const styles = StyleSheet.create({
  menuItem: {
    flexDirection:'row',
    
    marginBottom: 15,
    
  },
  menuItemText: {
    fontSize:17,
    fontWeight:'500',
    margin:15,
    
    color : 'white'
  }
})

export default DrawerItem