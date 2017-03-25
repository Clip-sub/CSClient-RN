'use strict';
import React, {Component, PropTypes} from "react";
import {Container, Header, View} from "react-native";
import {Content} from "native-base";
import {ItemPostCard} from "./items/item-post-card";
import API from "../services/API";

export default class Authentication extends Component {
  _onPressLogin() {
    API.create().getRecentPosts()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Content>

      </Content>
    );
  }
}