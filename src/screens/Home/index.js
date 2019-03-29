import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";

import { images } from "../../utils";
import styles from "./styles";

export default class Home extends Component {
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
              <Text style={styles.smallTxt}>Vous n'avez pas de comple?</Text>
              <Text style={styles.mediumTxt}>S'inscrire</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomInnerContainer}>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.smallTxt}>Vous avez deja un compte?</Text>
              <Text style={styles.mediumTxt}>Se connecter</Text>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.regularTxt}>
              Recherchez-vous I'application du passenger?
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
