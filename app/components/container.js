/**
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Drawer, SideMenu} from 'native-base';
import Home from './home';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Drawer>
        <Home/>
      </Drawer>
    );
  }
}

Container.defaultProps = {

};