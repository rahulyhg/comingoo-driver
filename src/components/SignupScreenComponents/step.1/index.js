import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Item, Label, Input, Toast } from "native-base";
import { icons } from "../../../utils/"

export default class Step1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      phone : ''
    };
  }

  next = () => {
    if(this.state.phone != ''){
       // Save step state for use in other steps of the wizard
      this.props.saveState(0,{key:'value'})

      // Go to next step
      this.props.nextFn()
    }
    else {
      return Toast.show({
        text: 'Phone number field is blank',
        type: "warning",
        duration: 3000,
        buttonText: 'Okay'
      })
    }
}

  render() {
   
    return (
    
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.headingTxt}>Sign up</Text>
            <Text style={styles.subHeadingTxt}>Enter your phone number</Text>
          </View>

          <View style={styles.middleContainer}>
            <View style={styles.fieldContainer}>
              <Item stackedLabel style={styles.inputs} >
                <Label style={styles.labelStyle}>Phone number</Label>
                <Input
                  style={styles.inputStyle}
                  keyboardType="phone-pad"
                  onChangeText={phone => this.setState({ phone })}
                />
              </Item>
             </View>
             </View>
         
            <View style={styles.bottomContainer}>
              <TouchableOpacity
               style={styles.nextBtn} 
               onPress={()=> this.next()}>
              <Image style={styles.btnImage} source={icons.right_arrow} />
              </TouchableOpacity>
            </View>
         
        </View>
     
    );
  }
}
