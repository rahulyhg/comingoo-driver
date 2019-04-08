import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ListView, Image } from 'react-native'


const ProfileComponent = ({ profileUrl, username, email }) =>
  <View style={{flexDirection:'row', padding:10}}>
		<Image source={{uri: profileUrl}} 
		resizeMode="contain" 
		style={{margin:15, width:70, height:70, borderWidth:5, borderColor:'white', borderRadius:35}} />
  	<View style ={{justifyContent:'center', margin:15}}>
    	<Text style={{fontWeight:'700', fontSize:25, color:'#fff'}}>{username}</Text>
    	<Text style={{fontWeight:'200', color:'#999'}}>{email}</Text>
  	</View>
  </View>


export default ProfileComponent