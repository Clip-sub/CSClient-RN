/**
 * @flow
 */
'use strict';
import React from 'react';
import { View, Image } from 'react-native';
import { Body, Icon, Left, ListItem, Text } from 'native-base';
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import HomeContainer from '../containers/home-container';

const customDrawerContentComponent = props => {
  const { dispatch } = props.navigation;
  const closeDrawer = NavigationActions.navigate({
    routeName: 'DrawerClose',
  });

  const goToScreen = screenName => {
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
          <Image
            source={{ uri: 'https://cdn.awwni.me/w28n.jpg' }}
            style={{ width: 90, height: 90, borderRadius: 45, zIndex: 9 }}
          />
          <Text suppressHighlighting style={{ color: '#fff' }}>
            Sophia Emilion
          </Text>
          <Text style={{ fontSize: 10, color: '#fff' }}>
            sophia@live.com
          </Text>
        </View>
      </View>
      <ListItem icon onPress={() => dispatch(closeDrawer)}>
        <Left>
          <Icon name="home" style={{ color: '#C0CA33' }} />
        </Left>
        <Body>
          <Text style={drawerStyle.itemText}>Home</Text>
        </Body>
      </ListItem>

      <ListItem icon onPress={() => goToScreen('Auth')}>
        <Left>
          <Icon name="person" style={{ color: '#AB47BC' }} />
        </Left>
        <Body>
          <Text style={drawerStyle.itemText}>
            Login / Register
          </Text>
        </Body>
      </ListItem>

      <ListItem icon>
        <Left>
          <Icon name="ios-construct-outline" style={{ color: '#536DFE' }} />
        </Left>
        <Body>
          <Text style={drawerStyle.itemText}>Settings</Text>
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
    height: 160,
    backgroundColor: '#fe686a',
  },
  miniProfile: {
    position: 'absolute',
    left: 18,
    bottom: 12,
  },
  itemText: {
    fontFamily: 'Hoefler Text',
    color: '#706b6b',
  },
};
