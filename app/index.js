/**
 * @flow
 */
'use strict';
import React, {Component} from "react";
import {StatusBar} from "react-native";
import {Provider} from "react-redux";
import CustomStore from "./stores/custom-store";
import RootContainer from "./containers/root-container";

const store = CustomStore();

export default class CSClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer/>
      </Provider>
    );
  }
}
