/**
 * @flow
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {View, Dimensions, ListView} from "react-native";
import {Content, Button, Text} from "native-base";
import {getRecentPosts, dummy} from "../actions/actions-core";
import PostMenuBar from "./post-menu-bar";
import ItemPostCard from "./items/item-post-card";
import API from "../services/API";

const INIT_PAGE = 1;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      posts: []
    };
    this.renderItem = this.renderItem.bind(this);
    this.page = INIT_PAGE;
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  _search(keyword) {

  }

  _getRecentPosts() {
    const {dispatch} = this.props;
    dispatch(getRecentPosts(this.page));
  }

  _dummy() {
    const {dispatch} = this.props;
    dispatch(dummy());
  }

  renderItem(item) {
    return (
      <ItemPostCard
        title={item.title}
        excerpt={item.excerpt}
        commentCount={item.comment_count}
        id={item.id}
        authorId={item.author.id}
        authorName={item.author.name}/>
    )
  }

  render() {
    return (
      <Content>
        <PostMenuBar/>
        <Button title={''} onPress={() => this._getRecentPosts()}>
          <Text>Reload Posts</Text>
        </Button>
        <Button title={''} onPress={() => this._dummy()}>
          <Text>{this.props.posts.text}</Text>
        </Button>
      </Content>
    );
  }
}
