import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ListView, Image } from 'react-native';

import {icons} from '../../../utils/';


const ProfileComponent = ({ profileUrl, username, email }) =>
  <View style={{flexDirection:'row', padding:10}}>
		<Image source={{uri: profileUrl}} 
		resizeMode="contain" 
		style={{margin:15, width:70, height:70, borderWidth:5, borderColor:'white', borderRadius:35}} />
  	<View style ={{justifyContent:'center', margin:15}}>
    	<Text style={{fontWeight:'700', fontSize:25, color:'#fff'}}>{username}</Text>
			<View
			style = {{width : 1}}
			>
			<Image 
			source={icons.rating}
			/>
			</View>
		</View>
  </View>


export default ProfileComponent