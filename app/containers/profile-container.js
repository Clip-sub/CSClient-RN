"use strict";
import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Container, Header, Text, Thumbnail, Left, Button, Icon } from "native-base";
import BlurImage from "react-native-blur-image";

/**
 * {
  "status": "ok",
  "user": {
    "id": 9433,
    "username": "testwpapi",
    "nicename": "testwpapi",
    "email": "phamvanquan.ltu@gmail.com",
    "url": "",
    "registered": "2016-09-09 09:04:21",
    "displayname": "testwpapi",
    "firstname": "",
    "lastname": "",
    "nickname": "testwpapi",
    "description": "",
    "capabilities": "",
    "avatar": null
  }
} */
export default class ProfileContainer extends Component {
  render() {
    return (
      <Container>
        {/*<StatusBar
          backgroundColor="green"
          barStyle="light-content"
          showHideTransition={"slide"}
        animated={true}/>*/}
        <View style={{backgroundColor: 'red', paddingBottom: 16}}>
          <BlurImage
            source={{ uri:'https://cdn.awwni.me/w28n.jpg' }}
            style={{ flex: 1, width: 200, height: 200, alignSelf: 'stretch'}}
            blurRadius={20}/>
          <Header noShadow={true} iosBarStyle={'light-content'} backgroundColor={'transparent'} style={{backgroundColor: 'transparent', borderBottomWidth: 0}}>
            <Left>
              <Button transparent>
                <Icon style={{color: '#fff'}} name='arrow-back'/>
              </Button>
            </Left>
          </Header>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center" }}>
            <Thumbnail large source={{ uri: "https://cdn.awwni.me/w28n.jpg" }} />
            <Text style={{ color: "#78909C", marginTop: 16, backgroundColor: 'transparent' }}>Sophia Emilion</Text>
            <Text style={{ fontSize: 10, color: "#607D8B" }}>@(Sophia-sama)</Text>
            <Text style={{ fontSize: 10, color: '#fff', marginTop: 10, paddingHorizontal: 40, textAlign: 'center'}}>
              Beyond the shadow you ffffffffsettled for, there's a miracle illuminated.
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}
