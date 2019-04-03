import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Item, Label, Input, Toast } from "native-base";
import { icons } from "../../../utils/"

export default class Step2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      otp : ''
    };
  }

  next = () => {
    if(this.state.otp != ''){
      // Save step state for use in other steps of the wizard
      this.props.saveState(0,{key:'value'})

      // Go to next step
      this.props.nextFn()
    }
    else {
      return Toast.show({
        text: 'OTP missing',
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
   
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.headingTxt}>Sign up</Text>
            <Text style={styles.subHeadingTxt}>
            A verification code has been sent to your phone number,
            please enter it bellow to continue.
            </Text>
          </View>

          <View style={styles.middleContainer}>
            <View style={styles.fieldContainer}>
              <Item stackedLabel style={styles.inputs} >
                <Label style={styles.labelStyle}>OTP</Label>
                <Input
                  style={styles.inputStyle}
                  keyboardType="phone-pad"
                  onChangeText={otp => this.setState({ otp })}
                />
              </Item>
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
