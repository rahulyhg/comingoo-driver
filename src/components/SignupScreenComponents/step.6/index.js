import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Toast, Row } from "native-base";
import { icons } from "../../../utils/";
import ImagePicker from "react-native-image-crop-picker";

export default class Step6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  handleChoosePhoto = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      mediaType: "photo",
      includeBase64: true
    })
      .then(images => {
        this.setState({
          images: images.map(i => {
            console.log("received image", i);
            return {
              uri: i.path,
              width: i.width,
              height: i.height,
              mime: i.mime,
              base64: i.data
            };
          })
        });
      })
      .catch(e => alert(e));
  };

  next = () => {
    const { images } = this.state;
    const data = this.props.getState()[1] || {};

    if (images.length >= 2) {
      data.idCardImages = {
        frontUrl: images[0].uri,
        backUrl: images[1].uri
      };
      this.props.saveState(1, data);

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

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf("video/") !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }

  renderImage(image) {
    return (
      <Image
        style={{ width: "100%", height: "100%", margin: 1 }}
        source={image}
      />
    );
  }

  render() {
    const { images } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}>Personal Identification Card</Text>
          <Text style={styles.subHeadingTxt}>
            Upload images of your ID (Both Side)
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <ScrollView contentContainerStyle={styles.imageWrapper}>
            <Image source={images[0]} style={styles.img} />
            <Image source={images[1]} style={styles.img} />
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.uploadBtnContainer}>
            <TouchableOpacity
              style={styles.upBtn}
              onPress={() => this.handleChoosePhoto()}
            >
              <Image style={styles.btnImage} source={icons.upload_icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.navBtns}>
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
      </View>
    );
  }
}
