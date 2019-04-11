import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import { store } from "../store";

import AppNavigator from "../navigations/index";

import { permissions } from "../helpers";
import { handlers } from "../helpers";

global.Symbol = require("core-js/es6/symbol");
require("core-js/fn/symbol/iterator");
require("core-js/fn/map");
require("core-js/fn/set");
require("core-js/fn/array/find");

export default class index extends Component {
  componentDidMount() {
    this._locationPermission();
  }

  _locationPermission = async () => {
    const hasPermissions = await permissions.checkLocationPermission();
    try {
      await permissions.requestLocationPermission();
    } catch (error) {
      handlers.showToast(error.message, "danger");
    }
  };

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
