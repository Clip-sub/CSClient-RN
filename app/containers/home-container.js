"use strict";

import React, { Component } from "react";
import { View } from "react-native";
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from "native-base";
import { connect, bindActionCreators } from "react-redux";
import { DrawerNavigator } from "react-navigation";
import { navigate } from "../actions/actions-navigation";
import PostList from "../components/post-list";

class HomeContainer extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#EF5350" }}
          iosBarStyle={"light-content"}>
          <Left>
            <Button
              title={""}
              transparent
              onPress={() => navigate("DrawerOpen")}>
              <Icon style={{ color: "#fff" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff", backgroundColor: "transparent" }}>
              Clip-sub
            </Title>
          </Body>
          <Right />
        </Header>
        <PostList {...this.props} />
      </Container>
    );
  }
}

const drawerRouteConfig = {
  Home: {
    screen: HomeContainer
  }
};

const drawerNavigatorConfig = {
  drawerWidth: 250,
  drawerPosition: "right",
  contentComponent: props => (
    <View style={{ backgroundColor: "#ccc" }}><Text>sdsadda</Text></View>
  )
};

const HomeScreen = DrawerNavigator(drawerRouteConfig, drawerNavigatorConfig);

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
const mapStateToProps = state => {
  console.log(state);
  const { posts, categories } = state;
  return {
    posts,
    categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
