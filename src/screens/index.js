import React, { Component } from "react";
import { Provider } from "react-redux";

import { store } from "../store";
import AppNavigator from "../navigations/index";

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
