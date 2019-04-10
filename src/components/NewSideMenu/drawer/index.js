import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ListView,
  Image,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
const { width, height } = Dimensions.get("window");

const DrawerItem = ({ icon, navigation, name, screenName }) =>
<View style={{
  left : Platform.OS === 'ios' ? width/12.7 : width/6.5,
}}>
<TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })}
  >
    <Image source={icon} 
    style={{
      height : Platform.OS === 'ios' ? 35 : 30,
      width : Platform.OS === 'ios' ? 35 : 30,
      }} />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
</View>
  


const styles = StyleSheet.create({
  menuItem: {
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 10,
    margin: Platform.OS === 'ios' ? 15 : 10, 
    
  },
  menuItemText: {
    fontSize: Platform.OS === 'ios' ? width/19 : width/20, 
    fontWeight: Platform.OS === 'ios' ? '500' : '200',
    margin:10,
    color : 'white'
  }
})

export default DrawerItem