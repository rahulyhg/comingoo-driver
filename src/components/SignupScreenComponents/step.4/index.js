import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Item, Label, Input, Toast } from "native-base";
import { Dropdown } from "react-native-material-dropdown";
import { handlers } from "../../../helpers";
import styles from "./styles";
import { icons } from "../../../utils/";
import data_gender from "../../../constants/gender";
import data_city from "../../../constants/city";
import data_bank_name from "../../../constants/bankName";

export default class Step4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      city: "",
      bankAccountNumber: "",
      bankName: ""
    };
  }

  next = () => {
    const { gender, city, bankName, bankAccountNumber } = this.state;
    const data = this.props.getState()[1];
    console.log(data);

    try {
      if (!gender && !city && !bankAccountNumber && !bankName) {
        throw { message: "Please fill all fields!" };
      }
      data.gender = gender;
      data.city = city;
      data.bank = {
        name: bankName,
        accountNumber: bankAccountNumber
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
          <Text style={styles.headingTxt}>Personal Information</Text>
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.fieldContainer}>
            <Label style={styles.labelStyleDropdown}>Gender</Label>
            <Dropdown
              data={data_gender}
              onChangeText={gender => this.setState({ gender })}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Label style={styles.labelStyleDropdown}>City</Label>
            <Dropdown
              data={data_city}
              onChangeText={city => this.setState({ city })}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />

            <Item stackedLabel style={styles.inputs}>
              <Label style={styles.labelStyle}>Bank Account Number</Label>
              <Input
                style={styles.inputStyle}
                keyboardType="phone-pad"
                onChangeText={bankAccountNumber =>
                  this.setState({ bankAccountNumber })
                }
              />
            </Item>

            <Label style={styles.labelStyleDropdown}>Bank Name</Label>
            <Dropdown
              data={data_bank_name}
              onChangeText={bankName => this.setState({ bankName })}
              baseColor={"#fff"}
              textColor={"#fff"}
              selectedItemColor={"#99999c"}
            />
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
