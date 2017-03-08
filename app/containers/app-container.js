/**
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StackNavigator} from "react-navigation";
import Home from '../components/home';

class AppContainer extends Component{
  static navigationOptions = {
    title: 'Welcome'
  };

  _renderScene(route, navigator) {
    let Component = route.component;

    return(
      <Component navigator={navigator} route={route}/>
    )
  }

  _configureScene(route) {
    if (route.name && route.name === 'Search') {
      return Navigator.SceneConfigs.FadeAndroid;
    } else {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
  }

  render() {
    return(
      <Home/>
    );
  }
}

export default AppContainer;