/**
 * @flow
 */
'use strict';
import React, {Component} from "react";
import {View, Text} from "react-native";
import {StackNavigator} from "react-navigation";
import LoginContainer from "./login-container";

const AppNavigator = StackNavigator({
  Login: {screen: LoginContainer}
});
export default class RootContainer extends Component {
  render() {
    return(
      <View>
        <Text>Yolo swag</Text>
      </View>
    );
  }
}