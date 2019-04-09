import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ListView,
  Image,
  StyleSheet
} from 'react-native'

const DrawerItem = ({ icon, navigation, name, screenName }) =>
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })}
  >
    <Image source={icon} style={{height : 35, width : 35}} />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>


const styles = StyleSheet.create({
  menuItem: {
    flexDirection:'row',
    alignItems: 'center',
    
  },
  menuItemText: {
    fontSize:17,
    fontWeight:'500',
    margin:15,
    color : 'white'
  }
})

export default DrawerItem