import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import ForgetPassword from "../screens/ForgerPassword";

// For app drawer

import Dashboard from "../screens/Dashboard";
import History from "../screens/History";
import Aide from "../screens/Aide";
import ComingooYou from "../screens/Comingoo_you";
import Inbox from "../screens/Inbox"

const AppDrawer = createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
    History: {
      screen: History
    },
    Aide: {
      screen: Aide
    },
    Comingoo_You: {
      screen: ComingooYou
    },
    Inbox: {
      screen: Inbox
    }
  },
);

const MainStack = createStackNavigator(
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
   
  },
  {
    initialRouteName: "Home"
  }
);

const AppNavigator = createSwitchNavigator({
  AuthStack : MainStack,
  Drawer : AppDrawer
})


export default createAppContainer(AppNavigator);

