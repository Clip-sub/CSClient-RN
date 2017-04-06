/**
 * @flow
 */
'use strict';
import {Types} from '../actions/types-navigation';
import Immutable from "seamless-immutable";
import {NavigationActions, addNavigationHelpers, StackNavigator} from "react-navigation";
import HomeScreen from "../containers/home-container";
import AuthScreen from "../containers/auth-container";

const INITIAL_STATE = Immutable({
  index: 1,
  routes: [
    { key: 'Init', routeName: 'HomeScreen' }
  ],
});

export {navigator};