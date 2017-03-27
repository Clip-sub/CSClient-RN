'use strict';

import React, {Component} from "react";
import {View, Image} from "react-native";
import {Container, Button, Icon, Header, Left} from "native-base";
import {connect} from "react-redux";
import Home from "../components/home";

class HomeContainer extends Component {

  render() {
    const {posts} = this.props;

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
  console.log(posts);
  return {
    posts
  }
}

export default connect(mapStateToProps)(HomeContainer);
