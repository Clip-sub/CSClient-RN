import React, {Component, PropTypes} from "react";
import {View} from "react-native";
import {Container, Header, Button, Left, Body, Right, Title, Icon, Content, Card, CardItem, Text} from "native-base";
import {connect} from "react-redux";
import Authentication from "../components/authentication";

export default class AuthContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  };

  static navigationOptions = {
    title: 'Login Screen',
    header: {
        left: <Button title={''} onPress={() => {}} transparent><Icon name='menu'/></Button>,
    }
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

  render() {
    return(
        <Authentication/>
    );
  }
}