import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import ForgetPassword from "../screens/ForgerPassword";

// For app drawer
//import SideMenu from '../components/SideMenu/index'
import SideMenu from '../components/NewSideMenu/index'
import Dashboard from "../screens/Dashboard";
import History from "../screens/History";
import Aide from "../screens/Aide";
import ComingooYou from "../screens/Comingoo_you";
import Inbox from "../screens/Inbox";

import {Platform, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth : WIDTH - WIDTH/4
}

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
    ComingooYou: {
      screen: ComingooYou
    },
    Inbox: {
      screen: Inbox
    }
  },
  {
    contentComponent: SideMenu,
  },
  // {
  //   drawerWidth : WIDTH - WIDTH/4
  // }
  
  
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

