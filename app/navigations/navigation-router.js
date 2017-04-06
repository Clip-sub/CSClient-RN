/**
 * @flow
 */
'use strict';
import {StackNavigator} from "react-navigation";
import HomeScreen from "../containers/home-container";
import AuthScreen from "../containers/auth-container";

const routeConfig = {
  HomeScreen: {screen: HomeScreen},
  AuthScreen: {screen: AuthScreen}
};

const stackNavigatorConfig = {
  initialRouteName: 'HomeScreen',
  mode: 'card',
  headerMode: 'none',
  navigationOptions: {
    header: {
      visible: false
    }
  }
};

const AppNavigator = StackNavigator(routeConfig, stackNavigatorConfig);

export default AppNavigator;
