import React, { Component } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { images } from "../../utils";
import styles from "./styles";

import { resetErrorAndLoading } from "../../store/auth/actions";
import { strings } from "../../i18n";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    const { resetErrorAndLoading } = nextProps;
    resetErrorAndLoading();
  }

  navigate = route => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Image
            source={images.comingoo_logo}
            style={styles.logoStyles}
            resizeMode="contain"
          />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.middleInnerContainer}>
            <View style={styles.middleTextContainer}>
              <Text style={styles.smallTxt}>
                {strings("home.dont_have_an_account")}
              </Text>
              <TouchableOpacity onPress={() => this.navigate("Signup")}>
                <Text style={styles.mediumTxt}>{strings("home.register")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomInnerContainer}>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.smallTxt}>
                {strings("home.already_have_an_account")}
              </Text>
              <TouchableOpacity onPress={() => this.navigate("Login")}>
                <Text style={styles.mediumTxt}>{strings("home.login")}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.regularTxt}>
              {strings("home.looking_for_rider_app")}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  resetErrorAndLoading: () => dispatch(resetErrorAndLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
