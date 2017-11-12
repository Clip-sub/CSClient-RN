/**
 * @flow
 */

'use strict';

import React from 'react';
import { View, StatusBar } from 'react-native';
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
import { bindActionCreators } from 'redux';
import OneSignal from 'react-native-onesignal';
import PostList from '../components/post-list';
import CategoryList from '../components/category-list';
import CommentList from '../components/comment-list-home';
import PagePlaceholder from '../components/page-placeholder';
import * as navigationActions from '../actions/actions-navigation';
import * as postActions from '../actions/actions-content';
import * as categoryActions from '../actions/actions-categories';
import * as commentActions from '../actions/actions-comments';

const HomeContainer = props => {
  const { navigate, switchHomeTab, home } = props;

  const renderHomeContent = () => {
    switch (home.activeTabIndex) {
      case 1:
        return <PostList {...props} />;
      case 2:
        return <CategoryList {...props} />;
      case 3:
        return <PagePlaceholder {...props} />;
      case 4:
        return <CommentList {...props} />;
    }
  };

  return (
    <Container>
      <Header iosBarStyle={'light-content'}>
        <StatusBar backgroundColor="#d32f2f" barStyle="light-content" />
        <Left>
          <Button title={''} transparent onPress={() => navigate('DrawerOpen')}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Clip-sub</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => OneSignal.setSubscription(true)}>
            <Icon name="notifications" />
          </Button>
        </Right>
      </Header>
      {renderHomeContent()}
      <Footer>
        <FooterTab>
          <Button
            active={home.activeTabIndex === 1}
            onPress={() => switchHomeTab(1)}
          >
            <Icon name="home" />
          </Button>
          <Button
            active={home.activeTabIndex === 2}
            onPress={() => switchHomeTab(2)}
          >
            <Icon name="list" />
          </Button>
          <Button
            active={home.activeTabIndex === 3}
            onPress={() => switchHomeTab(3)}
          >
            <Icon active name="navigate" />
          </Button>
          <Button
            active={home.activeTabIndex === 4}
            onPress={() => switchHomeTab(4)}
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
  const { posts, categories, comments, home } = state;
  return {
    home,
    posts,
    categories,
    comments,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...postActions,
      ...categoryActions,
      ...commentActions,
      ...navigationActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
