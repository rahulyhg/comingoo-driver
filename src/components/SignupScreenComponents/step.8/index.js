import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";

import styles from "./styles";
import { icons } from "../../../utils/";
import { handlers } from "../../../helpers";

export default class Step8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      disabled: false
    };
  }

  handleChoosePhoto = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true
    })
      .then(images => {
        this.setState({
          images: images.map(i => {
            console.log("received image", i);
            return {
              uri: i.path,
              width: i.width,
              height: i.height,
              mime: i.mime
            };
          })
        });
      })
      .catch(e => alert(e));
  };

  next = () => {
    const { images } = this.state;
    const data = this.props.getState()[1];
    if (images.length >= 2) {
      data.drivingLicenseImages = {
        frontUrl: images[0].uri,
        backUrl: images[1].uri
      };

      this.setState({ disabled: true });
      console.log("final payload>>", data);

      this.props.saveState(1, data);
      this.props.nextFn();
    } else {
      handlers.showToast(
        "You forgot to upload your Drivers License image",
        "danger"
      );
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
      <Image style={{ width: 180, height: 180, margin: 1 }} source={image} />
    );
  }

  render() {
    const { images, disabled } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}>Driving Licence</Text>
          <Text style={styles.subHeadingTxt}>
            Upload images of your Driving Licence (Both Side)
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
              disabled={disabled}
            >
              <Image style={styles.btnImageLeft} source={icons.right_arrow} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => this.next()}
              disabled={disabled}
            >
              <Image style={styles.btnImage} source={icons.right_arrow} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
