import React, {Component, PropTypes} from "react";
import {View, Image} from "react-native";
import {Container, Header, Button, Left, Body, Right, Form, Item, Input,
  Title, Icon, Content, Card, CardItem, Text} from "native-base";
import {connect} from "react-redux";
import Authentication from "../components/authentication";
import LoginForm from "../components/authentication/login-form";

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
    this.isAttempting = false;
    //<Image style={{flex: 1}} source={{uri: 'https://cdn.awwni.me/w28n.jpg'}}>
  }

  render() {
    return(
      <Image style={{flex: 1}} source={{uri: 'https://cdn.awwni.me/w28n.jpg'}}>
      <View style={{position: 'absolute', width: 2000, height: 2000, backgroundColor: '#000', opacity: 0.6}}/>
      <Container>
        <Header style={{backgroundColor: 'transparent'}} iosBarStyle={'light-content'}>
          <Left>
            <Button
              title={''}
              onPress={() => console.log('Open menu')}
              transparent>
              <Icon style={{color: '#fff'}} name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#fff', backgroundColor: 'transparent'}}>Login</Title>
          </Body>
          <Right/>
        </Header>
        <LoginForm/>
      </Container>
      </Image>
    );
  }
}