import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import ForgetPassword from "../screens/ForgerPassword";

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
    ForgetPassword: { screen: ForgetPassword }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
