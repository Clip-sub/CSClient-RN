/**
 * @flow
 */
"use strict";
import Immutable from "seamless-immutable";
import {NavigationActions} from "react-navigation";
import AppNavigator from "../navigations/app-navigator";
import HomeDrawerNavigator from "../navigations/drawer-navigator";

const initialNavState = Immutable({
  index: 0,
  routes: [{key: "Init", routeName: "HomeDrawer"}]
});

export const nav = (state, action) => {
  switch (action.type) {
    case "Home":
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: "HomeDrawer"}),
        state
      );
    case "Authentication":
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: "Authentication"}),
        state
      );
    case "Profile":
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: "Profile"}),
        state
      );
    case "DrawerOpen":
      return HomeDrawerNavigator.getStateForAction(
        NavigationActions.navigate({routeName: "DrawerOpen"}),
        state
      );
    case "DrawerClose":
      return HomeDrawerNavigator.getStateForAction(
        NavigationActions.navigate({routeName: "DrawerClose"}),
        state
      );
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
};
