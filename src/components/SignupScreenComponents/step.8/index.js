import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { Toast } from "native-base";
import { icons } from "../../../utils/";
import ImagePicker from 'react-native-image-crop-picker';

export default class Step8 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: null,
    };
  }

  handleChoosePhoto = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      this.setState({
        images: images.map(i => {
          console.log('received image', i);
          return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        })
      });
      }).catch(e => alert(e));
    };

  next = () => {
    if(this.state.images != null){
       // Save step state for use in other steps of the wizard
       this.props.saveState(0,{key:'value'})

       // Go to next step
       this.props.nextFn()

       //Success Alert
       Alert.alert(
        'Successfully Registered'
      );
    }
    else {
      return Toast.show({
        text: 'You forgot to upload your Drivers License image',
        type: "warning",
        duration: 3000,
        buttonText: 'Okay'
      })
    }
  }

  back = () => {
    this.props.prevFn()
   }

   renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
};

  renderImage(image) {
    return <Image style={{width: 180, height: 180, margin: 1}} source={image} />
  }

  render() {

    const { photo } = this.state ;

    return (
      
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.headingTxt}>Driving License</Text>
            <Text style={styles.subHeadingTxt}>Upload images of your Driving License (Both Side)</Text>
          </View>

          <View style={styles.middleContainer}>
          
          <View style={{flex: 1, flexDirection : 'row', color:'white', alignItems: 'center', justifyContent: 'center' }}>
          {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
          </View>
          <TouchableOpacity
          style={styles.upBtn} 
          onPress={()=> this.handleChoosePhoto()}>
          <Image style={styles.btnImage} source={icons.upload_icon} />
          </TouchableOpacity>
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
