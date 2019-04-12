import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Item, Label, Input } from "native-base";
import { Dropdown } from "react-native-material-dropdown";
import { handlers } from "../../../helpers";

import styles from "./styles";
import { icons } from "../../../utils/";
import data_year from "../../../constants/year";
import data_car_color from "../../../constants/carColor";
import data_car_brand from "../../../constants/carBrand";
import data_car_model from "../../../constants/carModel";

export default class Step5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      car_brand: "",
      car_model: "",
      car_color: "",
      releaseYear: "",
      license: ""
    };
  }

  next = () => {
    const {
      car_brand,
      car_model,
      car_color,
      releaseYear,
      license
    } = this.state;
    const data = this.props.getState()[1];
    try {
      if (!car_brand && !car_model && !car_color && !releaseYear && !license) {
        throw { message: "Please fill all fields!" };
      }
      data.car = {
        brand: car_brand,
        model: car_model,
        color: car_color,
        yearOfRelease: releaseYear,
        licensePlateNumber: license
      };
      this.props.saveState(1, data);

      this.props.nextFn();
    } catch (error) {
      handlers.showToast(error.message, "danger");
    }
  };

  back = () => {
    this.props.prevFn();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}>Car Information</Text>
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.fieldContainer}>
            <Label style={styles.labelStyleDropdown}>Car Brand</Label>
            <Dropdown
              data={data_car_brand}
              onChangeText={car_brand => this.setState({ car_brand })}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Label style={styles.labelStyleDropdown}>Car Model</Label>
            <Dropdown
              data={data_car_model}
              onChangeText={car_model => this.setState({ car_model })}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Label style={styles.labelStyleDropdown}>Car Color</Label>
            <Dropdown
              data={data_car_color}
              onChangeText={car_color => this.setState({ car_color })}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Label style={styles.labelStyleDropdown}>Year of release</Label>
            <Dropdown
              data={data_year}
              onChangeText={releaseYear => this.setState({ releaseYear })}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Item stackedLabel style={styles.inputs}>
              <Label style={styles.labelStyle}>License Plate Number</Label>
              <Input
                style={styles.inputStyle}
                keyboardType="phone-pad"
                maxLength={6}
                onChangeText={license => this.setState({ license })}
              />
            </Item>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.back()}>
            <Image style={styles.btnImageLeft} source={icons.right_arrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextBtn} onPress={() => this.next()}>
            <Image style={styles.btnImage} source={icons.right_arrow} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
