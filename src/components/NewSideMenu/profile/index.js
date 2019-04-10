import React, { Component } from 'react'
import { Platform, View, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

import {icons} from '../../../utils/';


const ProfileComponent = ({ profileUrl, username, email }) =>
  <View style={{flexDirection:'row', marginTop: Platform.OS === 'ios' ? width/10 : height/270}}>

		<Image source={{uri: profileUrl}} 
				
				style={{
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
					}} />

		

  		{/* <View style ={{marginTop : height/35,}}>

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
		
		
		</View> */}
  </View>


export default ProfileComponent