import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Toast } from "native-base";
import { icons } from "../../../utils/";
import ImagePicker from "react-native-image-picker";

export default class Step6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      car_brand: "",
      photo: null
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.showImagePicker({ quality: 0.5 }, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };

  next = () => {
    if (this.state.photo != null) {
      // Save step state for use in other steps of the wizard
      this.props.saveState(0, { key: "value" });

      // Go to next step
      this.props.nextFn();
    } else {
      return Toast.show({
        text: "You forgot to upload ID card image",
        type: "warning",
        duration: 3000,
        buttonText: "Okay"
      });
    }
  };

  back = () => {
    this.props.prevFn();
  };

  render() {
    const { photo } = this.state;

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.headingTxt}>Personal Identification Card</Text>
            <Text style={styles.subHeadingTxt}>
              Upload image of your ID (Both Side)
            </Text>
          </View>

          <View style={styles.middleContainer}>
            <View
              style={{
                flex: 1,
                color: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {photo && (
                <Image
                  source={{ uri: photo.uri }}
                  style={{ width: 300, height: 300, marginBottom: 30 }}
                />
              )}

              <TouchableOpacity
                style={styles.upBtn}
                onPress={() => this.handleChoosePhoto()}
              >
                <Image style={styles.btnImage} source={icons.upload_icon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.back()}
            >
              <Image style={styles.btnImageLeft} source={icons.right_arrow} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => this.next()}
            >
              <Image style={styles.btnImage} source={icons.right_arrow} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
