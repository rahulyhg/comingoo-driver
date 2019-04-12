import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import { store } from "../store";

import AppNavigator from "../navigations/index";

import { permissions } from "../helpers";
import { handlers } from "../helpers";


export default class index extends Component {

  componentDidMount() {
    this._locationPermission()
  }

  _locationPermission = async () =>{
    const hasPermissions = await permissions.checkLocationPermission();
    try {
        await permissions.requestLocationPermission();
      } catch (error) {
       handlers.showToast(error.message, "danger");
      }
  }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </Root>
    );
  }
}
