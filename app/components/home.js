/**
 * @flow
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {View, Dimensions} from "react-native";
import {Container, Header, Content, Button, Fab,
  Item, Input, Left, Body, Right, Title, Icon, Text, List, ListItem, Switch} from "native-base";
import PostMenuBar from "./post-menu-bar";
import {getRecentPosts} from "../actions/actions-core";
import API from "../services/API";

export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }

  static defaultProps = {
    posts: []
  }

  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      posts: []
    }
    this.renderItem = this.renderItem.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate();
  }

  _search(keyword) {

  }

  _getRecentPosts() {
    const {dispatch} = this.props;
    console.log('get recent');
    dispatch({type: 'GET_RECENT_POSTS'});
  }

  renderItem(item) {
    return (
      <ListItem>
        <Text>{item.title}</Text>
      </ListItem>
    )
  }

  render() {
    return (
      <Content>
        <PostMenuBar/>
        <Button onPress={() => this._getRecentPosts()}>
          <Text>Press here to load</Text>
        </Button>
        <List
          dataArray={this.props.posts}
          renderRow={(item) => this.renderItem(item)} />
      </Content>
    );
  }
}
