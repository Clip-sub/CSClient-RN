"use strict";
import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {
  Button,
  Container,
  Header,
  Content,
  Icon,
  Card,
  CardItem,
  Left,
  Right,
  Text,
  Thumbnail,
  Form,
  ListItem
} from "native-base";


export default class ProfileContainer extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#fff'}}>
        {/*<StatusBar
         backgroundColor="green"
         barStyle="light-content"
         showHideTransition={"slide"}
         animated={true}/>*/}
        <View style={styles.profileHeaderContainer}>
          <Header
            noShadow={true}
            iosBarStyle={"light-content"}
            backgroundColor={"transparent"}
            style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="light-content"
            translucent
            showHideTransition={"slide"}
            animated={true}/>
            <Left>
              <Button transparent>
                <Icon style={{ color: "#fff" }} name="arrow-back" />
              </Button>
            </Left>
          </Header>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Thumbnail
              large
              source={{ uri: "https://cdn.awwni.me/w28n.jpg" }}/>
            <Text
              style={{
                color: "#78909C",
                marginTop: 16,
                backgroundColor: "transparent" }}>
              Sophia Emilion
            </Text>
            <Text style={{ fontSize: 10, color: "#78909C" }}>@(Sophia-sama)</Text>
            <Text
              style={{
                fontSize: 10,
                color: "#fff",
                marginTop: 10,
                paddingHorizontal: 40,
                textAlign: "center" }}>
              Beyond the shadow you settled for, there's a miracle illuminated.
            </Text>
          </View>
        </View>

        <Content>
          <Card>
            <CardItem header>
              <Text>Profile</Text>
            </CardItem>

            <CardItem>
              <Icon active name="person" />
              <Text>Nickname</Text>
              <Right>
                <Text>Sophia-sama</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="calendar" />
              <Text>Registered</Text>
              <Right>
                <Text>29-10-2010</Text>
              </Right>
            </CardItem>
          </Card>

          <Button block rounded>
            <Text>View author's posts</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

const styles = {
  profileHeaderContainer: {
    backgroundColor: "#1b1b1b",
    paddingBottom: 16
  }
}