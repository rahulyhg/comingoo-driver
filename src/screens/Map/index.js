import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { Item, Label, Input } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import { handlers } from "../../helpers";
import MenuBtn from "../../components/SideMenu/menu_button/";

import styles from "./styles";
import { colors } from "../../constants";

class Map extends React.Component {
  static navigationOptions = navigation => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      coords: null,
      mapRegion: null,
      loading: true
    };
  }

  navigate = route => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  componentDidMount() {
    this._getLocation();
  }

  // Start: Current Location of Driver
  _getLocation = async () => {
    await navigator.geolocation.watchPosition(position => {
      this.setState({ coords: position.coords, loading: false });
    });
  };
  // End: Current Location of Driver

  render() {
    const { coords, loading } = this.state;
    if (loading) {
      return (
        <View style={styles.acIndicator}>
          <ActivityIndicator size="large" color={colors.bluePrimary} />
        </View>
      );
    } else {
      var latlng = { latitude: coords.latitude, longitude: coords.longitude };
      return (
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <Marker
              coordinate={latlng}
              title={"Driver"}
              description={"Comoongo"}
            />
          </MapView>
          <MenuBtn />
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
