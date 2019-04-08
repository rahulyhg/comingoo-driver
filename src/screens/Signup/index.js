import React from 'react';
import StepOne from "../../components/SignupScreenComponents/step.1/index.js";
import StepTwo from "../../components/SignupScreenComponents/step.2/index.js";
import StepThree from "../../components/SignupScreenComponents/step.3/index.js";
import StepFour from "../../components/SignupScreenComponents/step.4/index.js";
import StepFive from "../../components/SignupScreenComponents/step.5/index.js";
import StepSix from "../../components/SignupScreenComponents/step.6/index.js";
import StepSeven from "../../components/SignupScreenComponents/step.7/index.js";
import StepEight from "../../components/SignupScreenComponents/step.8/index.js";
import {colors} from "../../constants";
import styles from "./styles";
import MultiStep from 'react-native-multistep-wizard';

const steps = [
  {name: 'StepOne', component: <StepOne/>},
  {name: 'StepTwo', component: <StepTwo/>},
  {name: 'StepThree', component: <StepThree/>},
  {name: 'StepFour', component: <StepFour/>},
  {name: 'StepFive', component: <StepFive/>},
  {name: 'StepSix', component: <StepSix/>},
  {name: 'StepSeven', component: <StepSeven/>},
  {name: 'StepEight', component: <StepEight/>},
];

export default class Signup extends React.Component {

static navigationOptions = navigation => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

finish(wizardState){
  //code to be executed when wizard is finished
      }

  render() {
    return (
        //  <MultiStep steps={steps} onFinish={this.finish}/>
        <StepFive />
    );
  }
}
