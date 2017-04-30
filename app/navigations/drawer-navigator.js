/**
 * @flow
 */
"use strict";
import React from "react";
import {View} from "react-native";
import {Body, Icon, Left, ListItem, Text, Thumbnail} from "native-base";
import {DrawerNavigator, NavigationActions} from "react-navigation";
import HomeContainer from "../containers/home-container";

const resetToAuthScreen = () => {
  return NavigationActions.navigate({
    routeName: "Auth"
  });
};

const customDrawerContentComponent = (props) => {
  const {navigate} = props.navigation;

  const goToScreen = (screenName: string) => {
    navigate("DrawerClose");
    setTimeout(() => navigate(screenName), 500);
  };

  return (
    <View style={drawerStyle.drawerMenuContainer}>
      <View style={drawerStyle.drawerHeader}>
        <View style={drawerStyle.miniProfile}>
          <Thumbnail source={{uri: "https://cdn.awwni.me/w28n.jpg"}}/>
          <Text suppressHighlighting={true} style={{color: "#fff"}}>
            Sophia Emilion
          </Text>
          <Text style={{fontSize: 10, color: "#fff"}}>sophia@live.com</Text>
        </View>
      </View>
      <ListItem icon onPress={() => {
        navigate("DrawerClose");
        navigate("Auth")
      }}>
        <Left>
          <Icon name="home"/>
        </Left>
        <Body>
        <Text>Home</Text>
        </Body>
      </ListItem>

      <ListItem icon onPress={() => goToScreen("Auth")}>
        <Left>
          <Icon name="person"/>
        </Left>
        <Body>
        <Text>Login / Register</Text>
        </Body>
      </ListItem>

      <ListItem icon>
        <Left>
          <Icon name="ios-construct-outline"/>
        </Left>
        <Body>
        <Text>Settings</Text>
        </Body>
      </ListItem>
    </View>
  );
};

const drawerRouteConfig = {
  Home: {screen: HomeContainer}
};

const drawerNavigatorConfig = {
  drawerPosition: "left",
  contentComponent: customDrawerContentComponent
};

const HomeDrawerNavigator = DrawerNavigator(
  drawerRouteConfig,
  drawerNavigatorConfig
);

export default HomeDrawerNavigator;

const drawerStyle = {
  drawerMenuContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  drawerHeader: {
    height: 140,
    backgroundColor: "red"
  },
  miniProfile: {
    position: "absolute",
    left: 18,
    bottom: 12
  }
};
