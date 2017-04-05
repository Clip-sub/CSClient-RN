/**
 * @flow
 * Application's root container. Including navigation component.
 */
'use strict';
import React, {Component} from "react";
import {connect} from "react-redux";
import {addNavigationHelpers} from "react-navigation";
import {AppNavigator} from "../reducers/navigator";

class RootContainer extends Component {
  render() {
    const {dispatch, navState} = this.props;
    const navigationHelpers = addNavigationHelpers({dispatch, navState});

    return (
      <AppNavigator navigation={navigationHelpers}/>
    );
  }
}

function mapStateToProps(state) {
  const {navState} = state;
  return {
    navState
  }
}

const mapDispatchToProps = (dispatch, navState) => {
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);