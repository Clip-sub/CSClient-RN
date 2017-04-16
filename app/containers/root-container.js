/**
 * @flow
 * Application's root container. Including stack navigation component.
 */
"use strict";
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {addNavigationHelpers} from "react-navigation";
import AppNavigator from "../navigations/app-navigator";

const AppWithNavigationState = ({dispatch, nav}) => (
  <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav,
  posts: state.posts
});

export default connect(mapStateToProps)(AppWithNavigationState);
