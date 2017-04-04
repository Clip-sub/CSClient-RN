'use strict';

import React, {Component} from "react";
import {Button, Container, Footer, FooterTab, Header, Icon, Left, Text} from "native-base";
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
        <Header>
          <Left>
            <Button
              title={''}
              onPress={() => console.log('Open menu')}
              transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
        </Header>
        <Home {...this.props}/>
        <Footer style={{zIndex: 0, position: 'absolute', bottom: 0, right: 0, left: 0}}>
          <FooterTab>
            <Button>
              <Text>Tab 1</Text>
            </Button>
            <Button>
              <Text>Tab 2</Text>
            </Button>
            <Button active>
              <Text>Tab 3</Text>
            </Button>
            <Button>
              <Text>Tab 4</Text>
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
  const {posts} = state;
  return {
    posts
  }
}

export default connect(mapStateToProps)(HomeContainer);
