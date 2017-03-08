/**
 * @flow
 */
'use strict';
import React, {Component} from "react";
import {Provider} from "react-redux";
import CustomStore from "./stores/custom-store";
import AppContainer from "./containers/app-container";

const store = CustomStore(); // Initial state = null.

export default class CSClient extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <AppContainer/>}
      </Provider>
    );
  }
}
