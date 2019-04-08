import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Item, Label, Input, Toast } from "native-base";
import { icons } from "../../../utils/";
import { Dropdown } from "react-native-material-dropdown";
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
    if (
      this.state.name &&
      this.state.gender &&
      this.state.city &&
      this.state.bankAccountNumber &&
      this.state.bankName != ""
    ) {
      // Save step state for use in other steps of the wizard
      this.props.saveState(0, { key: "value" });

      // Go to next step
      this.props.nextFn();
    } else {
      return Toast.show({
        text: "One of the field is missing",
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
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headingTxt}>Personal Information</Text>
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.fieldContainer}>
            <Item stackedLabel style={styles.inputs}>
              <Label style={styles.labelStyle}>Full Name</Label>
              <Input
                style={styles.inputStyle}
                keyboardType="phone-pad"
                onChangeText={name => this.setState({ name })}
              />
            </Item>

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
