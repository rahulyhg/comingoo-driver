import React, { Component } from "react"
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground
} from "react-native"

//import { icons } from "../../utils";
import ProfileComponent from '../../components/SideMenu/profile';
import DrawerItem from '../../components/SideMenu/drawer';
import styles from './styles';
import { images } from '../../utils/index';

import home_ic from '../../assets/icons/home.png';
import history_ic from '../../assets/icons/history.png';
import aide_ic from '../../assets/icons/aide.png';
import heart_ic from '../../assets/icons/heart.png';
import inbox_ic from '../../assets/icons/inbox.png'



const userData = {
  profileUrl: 'https://avatars3.githubusercontent.com/u/11048415?s=460&v=4',
  username: 'Motasim',
  email: 'motasim@test.test'
}


const menuData = [
  {icon: home_ic, name:"Dashboard", screenName:"Dashboard", key: 1},
  {icon: history_ic, name:"History", screenName:"History", key: 2},
  {icon: inbox_ic, name:"Inbox", screenName:"Inbox", key: 3},
  {icon: heart_ic, name:"Comingoo & You", screenName:"ComingooYou", key: 4},
  {icon: aide_ic, name:"Aide", screenName:"Aide", key: 5},
  ]



class SideMenu extends Component {
  render() {
    return (
      <ImageBackground source={images.drawer_bg} style={styles.container}>
        <ProfileComponent profileUrl={userData.profileUrl} username={userData.username} email={userData.email} />
        <FlatList
          data={menuData}
          renderItem={({item}) => <DrawerItem navigation={this.props.navigation} screenName={item.screenName} icon={item.icon} name={item.name} key={item.key} />}
        />
      </ImageBackground>
    );
  }
}



SideMenu.defaultProps = {};

SideMenu.propTypes = {};

export default SideMenu;