import React, { Component } from "react"
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native"


import ProfileComponent from '../../components/SideMenu/profile'
import DrawerItem from '../../components/SideMenu/drawer'

const userData = {
  profileUrl: 'https://avatars3.githubusercontent.com/u/11048415?s=460&v=4',
  username: 'Motasim',
  email: 'motasim@test.test'
}


const menuData = [
  {name:"Dashboard", screenName:"Dashboard", key: 1},
  {name:"History", screenName:"History", key: 2},
  {name:"Aide", screenName:"Aide", key: 3},
  {name:"Comingoo & You", screenName:"ComingooYou", key: 4},
  {name:"Inbox", screenName:"Inbox", key: 5},
//   {icon: "ios-chatboxes-outline", name:"Inbox", screenName:"PiedPiper", key: 3},
//   {icon: "ios-navigate-outline", name:"Trips", screenName:"Hooli", key: 4},
  
]



class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileComponent profileUrl={userData.profileUrl} username={userData.username} email={userData.email} />
        <FlatList
          data={menuData}
          renderItem={({item}) => <DrawerItem navigation={this.props.navigation} screenName={item.screenName} name={item.name} key={item.key} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(255,255,255,0.43)'
  },
  menuItem: {
    flexDirection:'row'
  },
  menuItemText: {
    fontSize:15,
    fontWeight:'300',
    margin:15,
  }
})

SideMenu.defaultProps = {};

SideMenu.propTypes = {};

export default SideMenu;