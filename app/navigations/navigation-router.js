/**
 * @flow
 */
'use strict';
import {StackNavigator} from "react-navigation";
import HomeScreen from "../containers/home-container";
import AuthScreen from "../containers/auth-container";

const routeConfiguration = {
  HomeScreen: {screen: HomeScreen},
  AuthScreen: {screen: AuthScreen}
};

const stackNavigatorConfiguration = {
  initialRouteName: 'HomeScreen',
  mode: 'card',
  navigationOptions: {
    header: {
      visible: false
    }
  }
};

const AppNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);

export default AppNavigator;
