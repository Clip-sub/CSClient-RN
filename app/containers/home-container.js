'use strict';

import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import {connect} from "react-redux";
import Home from "../components/home";

class HomeContainer extends Component {
  render() {
    return (
      <Home {...this.props}/>
    );
  }
}

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
function mapStateToProps(state) {
  const {activeTab, showSearchBar, searchKeyword} = state;

  return {
    activeTab,
    showSearchBar,
    searchKeyword
  }
}

export default connect(mapStateToProps)(HomeContainer);