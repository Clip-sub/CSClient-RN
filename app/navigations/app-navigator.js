/**
 * @flow
 */
"use strict";
import { StackNavigator } from "react-navigation";
import HomeDrawerNavigator from "../containers/navigation-drawer";
import AuthScreen from "../containers/auth-container";
import PreferencesScreen from "../containers/preferences-container";

const routeConfig = {
  Auth: { screen: AuthScreen },
  HomeDrawer: { screen: HomeDrawerNavigator },
  Preferences: { screen: PreferencesScreen }
};

const stackNavigatorConfig = {
  initialRouteName: "HomeDrawer",
  mode: "card",
  headerMode: "none",
  navigationOptions: {
    header: {
      visible: false
    }
  }
};

const AppNavigator = StackNavigator(routeConfig, stackNavigatorConfig);

export default AppNavigator;
