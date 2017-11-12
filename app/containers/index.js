/**
 * @flow
 * Application's root container. Including stack navigation component.
 * For now the navigation-drawer contains the home-container. All other containers are self-contained.
 */
'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from '../navigations/app-navigator';

const AppWithNavigationState = ({ dispatch, nav }) =>
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    nav: state.nav,
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AppWithNavigationState,
);
