/**
 * @flow
 */
'use strict';
import React from 'react';
import { View } from 'react-native';
import { Body, Icon, Left, ListItem, Text, Thumbnail } from 'native-base';
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import HomeContainer from '../containers/home-container';

const customDrawerContentComponent = props => {
  console.log('222', props);
  const { dispatch } = props.navigation;
  const goToScreen = screenName => {
    const closeDrawer = NavigationActions.navigate({
      routeName: 'DrawerClose',
    });
    const navigateAction = NavigationActions.navigate({
      routeName: screenName,
    });
    dispatch(closeDrawer);
    setTimeout(() => dispatch(navigateAction), 700);
  };

  return (
    <View style={drawerStyle.drawerMenuContainer}>
      <View style={drawerStyle.drawerHeader}>
        <View style={drawerStyle.miniProfile}>
          <Thumbnail source={{ uri: 'https://cdn.awwni.me/w28n.jpg' }} />
          <Text suppressHighlighting style={{ color: '#fff' }}>
            Sophia Emilion
          </Text>
          <Text style={{ fontSize: 10, color: '#fff' }}>sophia@live.com</Text>
        </View>
      </View>
      <ListItem icon>
        <Left>
          <Icon name="home" />
        </Left>
        <Body>
          <Text>Home</Text>
        </Body>
      </ListItem>

      <ListItem icon onPress={() => goToScreen('Auth')}>
        <Left>
          <Icon name="person" />
        </Left>
        <Body>
          <Text>Login / Register</Text>
        </Body>
      </ListItem>

      <ListItem icon>
        <Left>
          <Icon name="ios-construct-outline" />
        </Left>
        <Body>
          <Text>Settings</Text>
        </Body>
      </ListItem>
    </View>
  );
};

const drawerRouteConfig = {
  Home: { screen: HomeContainer },
};

const drawerNavigatorConfig = {
  drawerPosition: 'left',
  contentComponent: customDrawerContentComponent,
};

const HomeDrawerNavigator = DrawerNavigator(
  drawerRouteConfig,
  drawerNavigatorConfig,
);

export default HomeDrawerNavigator;

const drawerStyle = {
  drawerMenuContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  drawerHeader: {
    height: 140,
    backgroundColor: '#fe686a',
  },
  miniProfile: {
    position: 'absolute',
    left: 18,
    bottom: 12,
  },
};
