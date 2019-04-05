import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import ForgetPassword from "../screens/ForgetPassword";
import DriverMap from '../screens/Map';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgetPassword: { screen: ForgetPassword },
    Map: { screen:  DriverMap}
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
