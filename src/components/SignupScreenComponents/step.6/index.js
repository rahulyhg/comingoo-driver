import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import { Item, Label, Input, Toast } from "native-base";
import { icons } from "../../../utils/";
import ImagePicker from 'react-native-image-picker'


export default class Step6 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      car_brand : '',
      photo: null,
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
}

  next = () => {
    if(this.state.photo != null){
       // Save step state for use in other steps of the wizard
       this.props.saveState(0,{key:'value'})

       // Go to next step
       this.props.nextFn()
    }
    else {
      return Toast.show({
        text: 'One of the field is missing',
        type: "warning",
        duration: 3000,
        buttonText: 'Okay'
      })
    }
  }

  back = () => {
    this.props.prevFn()
   }

  render() {
    const { photo } = this.state ;
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.headingTxt}>Personal Identification Card</Text>
            <Text style={styles.subHeadingTxt}>Upload image of your ID (Both Side)</Text>
          </View>

          <View style={styles.middleContainer}>
          
          <View style={{flex: 1, color:'white', alignItems: 'center', justifyContent: 'center' }}>
          {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300, marginBottom:30 }}
          />
           )}
         
          <TouchableOpacity
          style={styles.upBtn} 
          onPress={()=> this.handleChoosePhoto()}>
          <Image style={styles.btnImage} source={icons.upload_icon} />
          </TouchableOpacity>
              
          </View>
          </View>
         
             <View style={styles.bottomContainer}>
             <TouchableOpacity
               style={styles.backBtn} 
               onPress={()=> this.back()}>
              <Image style={styles.btnImageLeft} source={icons.right_arrow} />
              </TouchableOpacity>

              <TouchableOpacity
               style={styles.nextBtn} 
               onPress={()=> this.next()}>
              <Image style={styles.btnImage} source={icons.right_arrow} />
              </TouchableOpacity>
            </View>
         
        </View>
      </ScrollView>
    );
  }
}
