import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import HomeDrawerNavigator from "../containers/navigation-drawer";
import PreferencesScreen from "../containers/preferences-container";
import ProfileScreen from "../containers/profile-container";

const routeConfig = {
  Preferences1: { screen: PreferencesScreen },
  Profile1: { screen: ProfileScreen },
};

const tabNavigatorConfig = {
  //...other configs
  tabBarPosition: "bottom",
  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    showIcon: 'true',
    showLabel: 'false',
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
};

const HomeTabNavigator = TabNavigator(routeConfig, tabNavigatorConfig);
export default HomeTabNavigator;
