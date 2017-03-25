/**
 * @flow
 * Application's root container. Including navigation component.
 */
'use strict';
import React, {Component} from "react";
import {View, Text, StatusBar, Button} from "react-native";
import {connect} from "react-redux";
import {addNavigationHelpers, StackNavigator} from "react-navigation";
import HomeScreen from "../containers/home-container";
import AuthScreen from "../containers/auth-container";

/**
 * Additional parameters would be: path, navigationOptions.
 */
const routeConfiguration = {
  HomeScreen: {screen: HomeScreen},
  AuthScreen: {screen: AuthScreen}
  /*Profile: { screen: ProfileContainer },
   Content: { screen: ContentContainer },
   About: { screen: AboutContainer }*/
};

/**
 * Default StackNavigator configuration.
 * Consult: https://reactnavigation.org/docs/navigators/stack
 * @type {{initialRouteName: string, mode: string, navigationOptions: {header: {visible: boolean}}}}
 */
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

class RootContainer extends Component {
  render() {
    console.log('here');
    const {dispatch, navState} = this.props;
    const navigationHelpers = addNavigationHelpers({dispatch: this.props.dispatch, navState: this.props.navState});

    return (
      <AppNavigator/>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => {
  }
});

export default connect(null, mapDispatchToProps)(RootContainer);