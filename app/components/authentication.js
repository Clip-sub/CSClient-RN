'use strict';
import React, {Component, PropTypes} from "react";
import {Container, Header, View} from "react-native";
import {Text, Content, Card, CardItem, Item, Input, Form, Button, Body} from "native-base";
import API from "../services/API";

export default class Authentication extends Component {
  _onPressLogin() {
    API.create().getRecentPosts()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return(
      <Content>
        <Card>
          <Form>
              <Item>
                  <Input placeholder="Username" />
              </Item>
              <Item last>
                  <Input placeholder="Password" />
              </Item>
              <Button block success onPress={() => this._onPressLogin()}>
                <Text>Login</Text>
              </Button>
          </Form>
        </Card>

                    <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text>
                                    //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                   </Card>

                    <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text>
                                    //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                   </Card>

                    <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text>
                                    //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                   </Card>

      </Content>
    );
  }
}