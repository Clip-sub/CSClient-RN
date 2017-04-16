/**
 * @flow
 */
"use strict";
import { StackNavigator } from "react-navigation";
import HomeScreen from "../containers/home-container";
import AuthScreen from "../containers/auth-container";
import PreferencesScreen from "../containers/preferences-container";

const routeConfig = {
  Auth: { screen: AuthScreen },
  Home: { screen: HomeScreen },
  
  Preferences: { screen: PreferencesScreen }
};

const stackNavigatorConfig = {
  initialRouteName: "Home",
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
