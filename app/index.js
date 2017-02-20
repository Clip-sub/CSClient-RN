/**
 * @flow
 */
'use strict';
import React, {Component} from "react";
import {Provider} from "react-redux";
import CustomStore from "./stores/custom-store";
import {thunk} from "redux-thunk";
import AppContainer from "./container";

const store = CustomStore(); // Initial state = null.
const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

export default class CSClient extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <AppContainer/>}
      </Provider>
    );
  }
}
