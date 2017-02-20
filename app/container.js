/**
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from './components/home';

export default class AppContainer extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Home/>
    );
  }
}
