/**
 * @flow
 */
'use strict';
import {Types} from '../actions/types-navigation';
import Immutable from "seamless-immutable";
import {NavigationActions, addNavigationHelpers, StackNavigator} from "react-navigation";
import HomeScreen from "../containers/home-container";
import AuthScreen from "../containers/auth-container";

const initialNavState = Immutable({
  index: 1,
  routes: [
    { key: 'Init', routeName: 'HomeScreen' }
  ],
});

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

const navReducer = (state = initialNavState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
}

export {navReducer};
export {AppNavigator};