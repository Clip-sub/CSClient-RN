/**
 * @flow
 */
"use strict";
import { Types } from "../actions/types-navigation";
import Immutable from "seamless-immutable";
import {
  NavigationActions,
  addNavigationHelpers,
  StackNavigator
} from "react-navigation";
import AppNavigator from "../navigations/app-navigator";

const INITIAL_STATE = Immutable({
  index: 0,
  routes: [{ key: "Init", routeName: "Home" }]
});

export const nav = (state = initialNavState, action) => {
  switch (action.type) {
    case "Login":
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    case "Logout":
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" }),
        state
      );
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
};
