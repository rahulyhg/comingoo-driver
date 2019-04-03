import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import { Item, Label, Input, Toast } from "native-base";
import { icons } from "../../../utils/";
import ImagePicker from 'react-native-image-picker'


export default class Dummy extends React.Component {

  render() {
    
    return (
      <View style={styles.container}> 
       <Text>Dummy</Text>
      </View>
    );
  }
}
