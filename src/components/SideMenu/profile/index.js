import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { Dimensions, StyleSheet } from "react-native";


const { width, height } = Dimensions.get("window");

import {icons} from '../../../utils/';


const ProfileComponent = ({ profileUrl, username, email }) =>
  <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center',  top: 40}}>

		<Image source={{uri: profileUrl}} 
		resizeMode="contain" 
		style={{margin:15, width:70, height:70, borderWidth:5, borderColor:'white', borderRadius:35}} />

  	<View style ={{paddingTop : 6}}>
    	<Text style={{fontWeight:'500', fontSize:25, color:'#fff'}}>{username}</Text>
		
			<ImageBackground 
			source={icons.rating}
			style={{flex:1, height: height/45, width: width/6}}
			>
			<Text style={{position: 'absolute', paddingLeft: 30}}>4.8</Text>
			</ImageBackground>
		
		
		</View>
  </View>


export default ProfileComponent