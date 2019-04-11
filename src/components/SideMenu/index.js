import React, { Component } from "react"
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
  FlatList,
  ImageBackground,
  Dimensions
} from "react-native"

import ProfileComponent from '../SideMenu/profile';
import DrawerItem from '../SideMenu/drawer';
import styles from './styles';
import { icons, images } from '../../utils/index';

const { width, height } = Dimensions.get("window");

const userData = {
  profileUrl: 'https://avatars3.githubusercontent.com/u/11048415?s=460&v=4',
  username: 'Motasim Foad',
  email: 'motasim@test.test'
}


const menuData = [
  {icon: icons.home_icon, name:"Accueli", screenName:"Dashboard", key: 1},
  {icon: icons.history, name:"Historique", screenName:"History", key: 2},
  {icon: icons.inbox_icon, name:"Inbox", screenName:"Inbox", key: 3},
  {icon: icons.heart_icon, name:"Comingoo & You", screenName:"ComingooYou", key: 4},
  {icon: icons.aide_icon, name:"Aide", screenName:"Aide", key: 5},
  ]



class SideMenu extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground source={images.drawer_bg} style={styles.container}>

        <View style={styles.secondContainer}>

        <ProfileComponent profileUrl={userData.profileUrl} username={userData.username} email={userData.email} />

          <FlatList
            data={menuData}
            style={{
              ...Platform.select({
                ios: {
                  paddingTop: height/20,
                },
                android: {
                  paddingTop: height/30
                },
              }),
            }}
            renderItem={({item}) => 
            <DrawerItem 
            navigation={this.props.navigation} 
            screenName={item.screenName} 
            icon={item.icon} 
            name={item.name} 
            key={item.key} />
          }
          />

        </View>
          <View style={styles.logoutContainer}>
          <TouchableOpacity 
                  style={styles.logout}
                  onPress={() => this.props.navigation.navigate('Home')}
                  >
                  <Image source={icons.logOut_icon} style={{width: 35, height : 35}}/>
                    <Text style={styles.menuItemText}>
                      Se déconnecter
                    </Text>
                  </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}



SideMenu.defaultProps = {};

SideMenu.propTypes = {};

export default SideMenu;