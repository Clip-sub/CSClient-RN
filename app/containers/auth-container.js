import React, { Component, PropTypes } from "react";
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Input,
  Left,
  Right,
  Title,
  Footer,
  FooterTab,
  Text,
  Content
} from "native-base";
import { Image, StatusBar } from "react-native";
import LoginForm from "../components/authentication/login-form";
import { connect } from "react-redux";

class AuthContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  };

  static navigationOptions = {
    title: "Login Screen",
    headerLeft: <Button title={""} transparent><Icon name="menu" /></Button>
  };

  constructor(props) {
    super(props);
    this.isAttempting = false;
    //<Image style={{flex: 1}} source={{uri: 'https://cdn.awwni.me/w28n.jpg'}}>
    //<View style={{position: 'absolute', width: 2000, height: 2000, backgroundColor: '#000', opacity: 0.6}}/>
  }

  /*componentDidMount() {
    var testStr = 5;
    var regex = new RegExp(testStr);
    let temp = "fghjkdfsf";
    console.log(regex.test(temp));

    var object={ mobile: mobile, content: regex};
    console.log(object);
  }*/

  render() {
    const { goBack } = this.props.navigation;

    return (
      <Container style={{ backgroundColor: "#542424", paddingTop: 20 }}>
        <Header
          noShadow={true}
          backgroundColor={"transparent"}
          style={{ backgroundColor: "transparent" }}
          iosBarStyle={"light-content"}>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          barStyle="light-content" />
          <Left>
            <Button title={""} onPress={() => goBack()} transparent>
              <Icon style={{ color: "#fff" }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff", backgroundColor: "transparent" }}>
              Login
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <LoginForm {...this.props} />
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
    common
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
