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
  Platform,
  StatusBar,
  Image,
  Dimensions,
  Keyboard,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import LoginForm from '../components/authentication/login-form';
import I18n from '../localizations/I18n';

class AuthContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func,
  };

  static navigationOptions = {
    title: 'Login Screen',
    headerLeft: <Button title={''} transparent><Icon name="menu" /></Button>,
  };

  constructor(props) {
    super(props);
    //<Image style={{flex: 1}} source={{uri: 'https://cdn.awwni.me/w28n.jpg'}}>
    //<View style={{position: 'absolute', width: 2000, height: 2000, backgroundColor: '#000', opacity: 0.6}}/>
  }

  render() {
    const { goBack } = this.props;

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
            <Title style={{ color: '#fff', backgroundColor: 'transparent' }}>
              {I18n.t('login_header_title')}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <LoginForm {...this.props} />
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              textAlign: 'center',
              marginVertical: 16,
            }}
          >
            This is the same login account you use on the website
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
    },
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

const styles = {
  container: {
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
};
