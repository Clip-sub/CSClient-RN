/**
 * @flow
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';
import {
  BackHandler,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  Keyboard,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import FlipCard from 'react-native-flip-card';
import ShakeEvent from 'react-native-shake';
import LoginForm from '../components/authentication/login-form';
import RegisterForm from '../components/authentication/register-form';
import I18n from '../localizations/I18n';

class AuthContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    mode: PropTypes.oneOf(['register, login']),
    attemptLogin: PropTypes.func,
  };

  static navigationOptions = {
    title: 'Login Screen',
    headerLeft: (
      <Button title={''} transparent>
        <Icon name="menu" />
      </Button>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  componentDidMount() {
    const { goBack } = this.props;
    BackHandler.addEventListener('hardwareBackPress', () => goBack());
    ShakeEvent.addEventListener('shake', () => {
      this.setState({ isFlipped: !this.state.isFlipped });
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
    ShakeEvent.removeEventListener('shake');
  }

  navigateBack() {
    const { goBack } = this.props;
    goBack();
    return true;
  }

  render() {
    const { goBack } = this.props;
    const { isFlipped } = this.state;

    return (
      <Container style={styles.container}>
        <Image
          style={{
            position: 'absolute',
            resizeMode: 'cover',
            width: Dimensions.get('window').width,
          }}
          source={require('../assets/bg_login.png')}
        />
        <Header
          noShadow
          backgroundColor={'transparent'}
          style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
          iosBarStyle={'light-content'}
        >
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle="light-content"
          />
          <Left>
            <Button title={''} onPress={() => goBack()} transparent>
              <Icon style={{ color: '#fff' }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{I18n.t('login_header_title')}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlipCard
            flip={isFlipped}
            friction={8}
            clickable={false}
            style={{ borderWidth: 0 }}
            perspective={250}
            flipHorizontal
            flipVertical={false}
          >
            <LoginForm />
            <RegisterForm />
          </FlipCard>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              textAlign: 'center',
              marginVertical: 16,
            }}
            onPress={() => this.setState({ isFlipped: !isFlipped })}
          >
            {'Wanna ' +
              (isFlipped ? 'login' : 'register') +
              '? \n Shake the device or tap here'}
          </Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // Make sure to not pass "form" prop to the component which override the original one.
  // Info: https://github.com/erikras/redux-form/issues/827
  // TL;DR: Don't pass {...state}, only use what you want
  const { nav, common } = state;
  return {
    nav,
    common,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => {
      Keyboard.dismiss();
      dispatch(NavigationActions.back());
      return true;
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

const styles = {
  container: {
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
};
