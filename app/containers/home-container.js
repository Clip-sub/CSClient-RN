'use strict';
import React from 'react';
import { View } from 'react-native';
import {
  Body,
  Button,
  Container,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PostList from '../components/post-list';
import CategoryList from '../components/category-list';
import { switchHomeTab } from '../actions/actions-navigation';

const HomeContainer = props => {
  const { openDrawer, activeTabIndex, dispatch } = props;

  const renderHomeContent = () => {
    switch (activeTabIndex) {
      case 1:
        return <PostList {...props.posts} dispatch={props.dispatch} />;
      case 2:
        return <CategoryList {...props.categories} dispatch={props.dispatch} />;
      case 3:
        return <View />;
      case 4:
        return <View />;
    }
  };

  return (
    <Container>
      <Header
        style={{ backgroundColor: '#EF5350' }}
        iosBarStyle={'light-content'}
      >
        <Left>
          <Button title={''} transparent onPress={() => openDrawer()}>
            <Icon style={{ color: '#fff' }} name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: '#fff', backgroundColor: 'transparent' }}>
            Clip-sub
          </Title>
        </Body>
        <Right />
      </Header>
      {renderHomeContent()}
      <Footer>
        <FooterTab>
          <Button
            active={activeTabIndex === 1}
            onPress={() => dispatch(switchHomeTab(1))}
          >
            <Icon name="home" />
          </Button>
          <Button
            active={activeTabIndex === 2}
            onPress={() => dispatch(switchHomeTab(2))}
          >
            <Icon name="list" />
          </Button>
          <Button
            active={activeTabIndex === 3}
            onPress={() => dispatch(switchHomeTab(3))}
          >
            <Icon active name="navigate" />
          </Button>
          <Button
            active={activeTabIndex === 4}
            onPress={() => dispatch(switchHomeTab(4))}
          >
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
const mapStateToProps = state => {
  const { posts, categories, activeTabIndex } = state;
  return {
    posts,
    categories,
    activeTabIndex,
  };
};

const mapDispatchToProps = dispatch => ({
  openDrawer: () => {
    const openDrawerAction = NavigationActions.navigate({
      routeName: 'DrawerOpen',
    });
    dispatch(openDrawerAction);
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
