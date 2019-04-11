import React from "react";
import { View, Dimensions, ActivityIndicator, StyleSheet } from "react-native";
import { Toast } from "native-base";
import { strings } from "../i18n";
import { colors } from "../constants";

const { height, width } = Dimensions.get("window");

const showToast = (message = "", type = "success", duration = 3000) => {
  return Toast.show({
    text: message,
    buttonText: strings("forgot_password.okay"),
    type,
    duration
  });
};

const overlayLoader = () => (
  <View style={styles.overlayLoaderStyles}>
    <ActivityIndicator size={"large"} color={colors.bluePrimary} />
  </View>
);

const styles = StyleSheet.create({
  overlayLoaderStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    position: "absolute",
    top: 0,
    zIndex: 10,
    height: height * 0.9,
    width
  }
});

const blobMaker = uri => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
};

export default {
  showToast,
  overlayLoader,
  blobMaker
};
