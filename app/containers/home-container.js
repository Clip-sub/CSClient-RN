"use strict";

import React from "react";
import {Body, Button, Container, Header, Icon, Left, Right, Title} from "native-base";
import {bindActionCreators, connect} from "react-redux";
import {NavigationActions} from "react-navigation";
import PostList from "../components/post-list";

const HomeContainer = (props) => {
  const {openDrawer} = props;
  return (
    <Container>
      <Header
        style={{backgroundColor: "#EF5350"}}
        iosBarStyle={"light-content"}>
        <Left>
          <Button
            title={""}
            transparent
            onPress={() => openDrawer()}>
            <Icon style={{color: "#fff"}} name="menu"/>
          </Button>
        </Left>
        <Body>
        <Title style={{color: "#fff", backgroundColor: "transparent"}}>
          Clip-sub
        </Title>
        </Body>
        <Right />
      </Header>
      <PostList {...props} />
    </Container>
  );
}

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
const mapStateToProps = (state) => {
  const {posts, categories} = state;
  return {
    posts,
    categories
  };
};

const mapDispatchToProps = (dispatch) => ({
  openDrawer: () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DrawerOpen'
    })
    dispatch(navigateAction);
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
