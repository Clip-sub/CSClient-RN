'use strict';

import React, {Component} from "react";
import {Button, Container, Footer, Body, Right, Title, FooterTab, Header, Icon, Left, Text} from "native-base";
import {Image} from "react-native";
import {connect} from "react-redux";
import Home from "../components/home";

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#EF5350'}} noShadow={false} iosBarStyle={'light-content'}>
          <Left>
            <Button
              title={''}
              onPress={() => console.log('Open menu')}
              transparent>
              <Icon style={{color: '#fff'}} name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#fff', backgroundColor: 'transparent'}}>Clip-sub</Title>
          </Body>
          <Right/>
        </Header>
        <Home {...this.props}/>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Pages</Text>
            </Button>
            <Button>
              <Text>Naruto</Text>
            </Button>
            <Button active>
              <Text>Posts</Text>
            </Button>
            <Button>
              <Text>Test</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
  const {posts, categories} = state;
  return {
    posts,
    categories
  }
}

export default connect(mapStateToProps)(HomeContainer);
