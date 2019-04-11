import React, { Component } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native';
import {icons} from '../../../utils/';
import styles from './styles';


const ProfileComponent = ({ profileUrl, username, email }) =>
  <View style={styles.mainContainer}>

		<Image source={{uri: profileUrl}} 
			     style={styles.profileImage} />

		<View style ={styles.subContainer}>
    	<Text style={styles.userName}>{username}</Text>
		
			<ImageBackground 
			source={icons.rating}
			style={styles.ratingImg}
			>
			<Text style={styles.ratingText}>5.0</Text>
			</ImageBackground>
		
		
		</View>
  </View>


export default ProfileComponent