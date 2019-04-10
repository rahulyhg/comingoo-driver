import React, { Component } from 'react'
import { Platform, View, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

import {icons} from '../../../utils/';


const ProfileComponent = ({ profileUrl, username, email }) =>
  <View style={{flexDirection:'row', top: Platform.OS === 'ios' ? width/9 : width/40}}>

		<Image source={{uri: profileUrl}} 
				resizeMode="contain" 
				style={{
					...Platform.select({
						ios: {
						borderColor:'white', 
						},
					}),
					margin:15, 
					width:70, 
					height:70, 
					borderWidth: Platform.OS === 'ios' ? 2 : 1, 
					borderRadius: Platform.OS === 'ios' ? 35 : 1000, }} />

		

  		<View style ={{marginTop : height/35,}}>

    		<Text style={{fontWeight:'500', fontSize:width*0.07, color:'#fff'}}>{username}</Text>
		
			<ImageBackground 
			source={icons.rating}
			style={{
				flex:1, 
				height: Platform.OS === 'ios' ? height/45 : height/30,   
				width: width/6
			}}
			>
			<Text style={{position: 'absolute', paddingLeft: 30}}>5.0</Text>
			</ImageBackground>
		
		
		</View>
  </View>


export default ProfileComponent