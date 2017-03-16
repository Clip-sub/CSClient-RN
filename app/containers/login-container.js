import React, {Component, PropTypes} from "react";
import {View} from "react-native";
import {connect} from "react-redux";

export default class LoginContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  };

  static navigationOptions = {
    label: 'login'
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.isAttempting = false;
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate();
  }
}