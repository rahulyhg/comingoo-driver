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
      brand: "",
      model: "",
      color: "",
      yearOfRelease: "",
      licensePlateNumber: ""
    };
  }

  componentDidMount() {
    const data = this.props.getState()[1] || {};
    console.log("TCL: Step3 -> componentDidMount -> data", data);
    this.setState({
      brand: (data.car && data.car.brand) || "",
      model: (data.car && data.car.model) || "",
      color: (data.car && data.car.color) || "",
      yearOfRelease: (data.car && data.car.yearOfRelease) || "",
      licensePlateNumber: (data.car && data.car.licensePlateNumber) || ""
    });
  }

  next = () => {
    const {
      brand,
      model,
      color,
      yearOfRelease,
      licensePlateNumber
    } = this.state;
    const data = this.props.getState()[1];
    try {
      if (!brand && !model && !color && !yearOfRelease && !licensePlateNumber) {
        throw { message: "Please fill all fields!" };
      }
      data.car = {
        brand,
        model,
        color,
        yearOfRelease,
        licensePlateNumber
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

  updateProps = (key, value) => {
    const data = this.props.getState()[1] || {};
    data[key] = value;
    this.props.saveState("1", data);
    const state = typeof value == "object" ? value : { [key]: value };
    this.setState(state);
  };

  render() {
    const {
      model,
      brand,
      color,
      yearOfRelease,
      licensePlateNumber
    } = this.state;
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
              onChangeText={brand =>
                this.updateProps("car", {
                  brand,
                  color,
                  model,
                  yearOfRelease,
                  licensePlateNumber
                })
              }
              baseColor={"#fff"}
              value={brand}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Label style={styles.labelStyleDropdown}>Car Model</Label>
            <Dropdown
              data={data_car_model}
              onChangeText={model =>
                this.updateProps("car", {
                  brand,
                  color,
                  model,
                  yearOfRelease,
                  licensePlateNumber
                })
              }
              baseColor={"#fff"}
              value={model}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Label style={styles.labelStyleDropdown}>Car Color</Label>
            <Dropdown
              data={data_car_color}
              onChangeText={color =>
                this.updateProps("car", {
                  brand,
                  color,
                  model,
                  yearOfRelease,
                  licensePlateNumber
                })
              }
              value={color}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Label style={styles.labelStyleDropdown}>Year of release</Label>
            <Dropdown
              data={data_year}
              onChangeText={yearOfRelease =>
                this.updateProps("car", {
                  brand,
                  color,
                  model,
                  yearOfRelease,
                  licensePlateNumber
                })
              }
              value={yearOfRelease}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Item stackedLabel style={styles.inputs}>
              <Label style={styles.labelStyle}>License Plate Number</Label>
              <Input
                style={styles.inputStyle}
                value={licensePlateNumber}
                keyboardType="phone-pad"
                maxLength={6}
                onChangeText={licensePlateNumber =>
                  this.updateProps("car", {
                    brand,
                    color,
                    model,
                    yearOfRelease,
                    licensePlateNumber
                  })
                }
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
