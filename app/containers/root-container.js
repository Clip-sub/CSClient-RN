/**
 * @flow
 * Application's root container. Including navigation component.
 */
'use strict';
import React, {Component} from "react";
import {View, Text, StatusBar, Button} from "react-native";
import {connect} from "react-redux";
import {addNavigationHelpers, StackNavigator} from "react-navigation";
import HomeContainer from "../containers/home-container";

/**
 * Additional parameters would be: path, navigationOptions.
 */
const routeConfiguration = {
  Home: {screen: HomeContainer},
  /*Profile: { screen: ProfileContainer },
   Content: { screen: ContentContainer },
   About: { screen: AboutContainer }*/
};

const stackNavigatorConfiguration = {
  initialRouteName: 'Home',
  mode: 'modal',
  headerMode: 'none',
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