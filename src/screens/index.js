import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";

import { store } from "../store";
import AppNavigator from "../navigations/index";

export default class index extends Component {
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
