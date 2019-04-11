import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import styles from './styles'

const DrawerItem = ({ icon, navigation, name, screenName }) =>
  <View style={styles.mainContainer}>
    <TouchableOpacity
        style={styles.menuItem}
        onPress={() =>
          navigation.navigate(`${screenName}`, { isStatusBarHidden: false })}
      >
        <Image source={icon} 
        style={styles.menuImage} />
        <Text style={styles.menuItemText}>{name}</Text>
      </TouchableOpacity>
  </View>
  
export default DrawerItem