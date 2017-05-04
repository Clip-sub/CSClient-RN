/**
 * @flow
 */
'use strict';
import { StackNavigator } from 'react-navigation';
import AuthScreen from '../containers/auth-container';
import PreferencesScreen from '../containers/preferences-container';
import ProfileScreen from '../containers/profile-container';
import HomeDrawerNavigator from './drawer-navigator';

const routeConfig = {
  Auth: { screen: AuthScreen },
  HomeDrawer: { screen: HomeDrawerNavigator },
  Preferences: { screen: PreferencesScreen },
  Profile: { screen: ProfileScreen },
};

const stackNavigatorConfig = {
  initialRouteName: 'HomeDrawer',
  mode: 'card',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
};

const AppNavigator = StackNavigator(routeConfig, stackNavigatorConfig);

export default AppNavigator;
