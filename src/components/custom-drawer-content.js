/**
 * @flow
 */
'use strict';
import React from 'react';
import { View, Image, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Body, Icon, Left, ListItem, Text } from 'native-base';
import { connect } from 'react-redux';
import md5 from 'blueimp-md5';
import { requestLogout } from '../actions/actions-users';

const CustomDrawerContent = props => {
  const { logout, user } = props;
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

  const onPressLogout = () => {
    Alert.alert(
      'Clip-sub',
      'You will be logged out, are you sure?',
      [
        { text: 'OK', onPress: () => logout() },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );

    dispatch(NavigationActions.navigate({ routeName: 'DrawerClose' }));
  };

  const userItem = !user
    ? <ListItem icon onPress={() => goToScreen('Auth')}>
        <Left>
          <Icon name="person" style={{ color: '#EF5350' }} />
        </Left>
        <Body>
          <Text style={drawerStyle.itemText}>Login / Register</Text>
        </Body>
      </ListItem>
    : <ListItem icon onPress={() => goToScreen('Profile')}>
        <Left>
          <Icon name="person" style={{ color: '#EF5350' }} />
        </Left>
        <Body>
          <Text style={drawerStyle.itemText}>Profile</Text>
        </Body>
      </ListItem>;

  return (
    <View style={drawerStyle.drawerMenuContainer}>
      <View style={drawerStyle.drawerHeader}>
        <View style={drawerStyle.miniProfile}>
          <Image
            source={
              user
                ? {
                    uri:
                      'https://gravatar.com/avatar/' +
                      md5(user.email) +
                      '?s=200',
                  }
                : require('../assets/default_avatar.png')
            }
            style={{ width: 90, height: 90, borderRadius: 45, zIndex: 9 }}
          />
          <Text suppressHighlighting style={{ color: '#fff' }}>
            {user ? user.nickname : ''}
          </Text>
          <Text style={{ fontSize: 10, color: '#fff' }}>
            {user ? user.email : ''}
          </Text>
        </View>
      </View>
      <ListItem icon onPress={() => dispatch(closeDrawer)}>
        <Left>
          <Icon name="home" style={{ color: '#EF5350' }} />
        </Left>
        <Body>
          <Text style={drawerStyle.itemText}>Home</Text>
        </Body>
      </ListItem>

      {userItem}

      <ListItem
        icon
        style={{ alignSelf: 'flex-end' }}
        onPress={() => goToScreen('Preference')}
      >
        <Left>
          <Icon name="ios-construct-outline" style={{ color: '#EF5350' }} />
        </Left>
        <Body>
          <Text style={drawerStyle.itemText}>Settings (soon)</Text>
        </Body>
      </ListItem>

      {user && user.id !== null
        ? <ListItem icon onPress={() => onPressLogout()}>
            <Left>
              <Icon name="ios-exit-outline" style={{ color: '#EF5350' }} />
            </Left>
            <Body>
              <Text style={drawerStyle.itemText}>Log out</Text>
            </Body>
          </ListItem>
        : null}
    </View>
  );
};

const drawerStyle = {
  drawerMenuContainer: {
    backgroundColor: '#fff9f9',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
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

const mapStateToProps = state => {
  const { user } = state;
  return {
    user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      return dispatch(requestLogout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CustomDrawerContent,
);
