/**
 * @flow
 * Application's root container. Including navigation component.
 */
'use strict';
import React, {Component} from "react";
import {View} from "react-native";
import {connect} from "react-redux";
import AppNavigator from "../navigations/navigation-router";

class RootContainer extends Component {
  componentDidMount() {

  }

  render() {
    const {dispatch, navState} = this.props;
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {posts} = state;
  return {
    posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps)(RootContainer);