import React, {Component, PropTypes} from "react";
import {Body, Button, Container, Header, Icon, Input, Left, Right, Title, Footer, FooterTab, Text, Content} from "native-base";
import LoginForm from "../components/authentication/login-form";
import {connect} from "react-redux";

class AuthContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  };

  static navigationOptions = {
    title: 'Login Screen',
    header: {
      left: <Button title={''} transparent><Icon name='menu'/></Button>,
    }
  };

  constructor(props) {
    super(props);
    this.isAttempting = false;
    //<Image style={{flex: 1}} source={{uri: 'https://cdn.awwni.me/w28n.jpg'}}>
    //<View style={{position: 'absolute', width: 2000, height: 2000, backgroundColor: '#000', opacity: 0.6}}/>
  }

  render() {
    return(
      <Container style={{backgroundColor: '#000'}}>
        <Header style={{backgroundColor: 'transparent'}} iosBarStyle={'light-content'}>
          <Left>
            <Button
              title={''}
              onPress={() => navigate('Home')}
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
        <Input/>
        <Content/>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);