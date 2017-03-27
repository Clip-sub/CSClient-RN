/**
 * @flow
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {View, Dimensions} from "react-native";
import {Content, Button, Text, List, ListItem} from "native-base";
import {getRecentPosts, dummy} from "../actions/actions-core";
import PostMenuBar from "./post-menu-bar";
import ItemPostCard from "./items/item-post-card";
import API, {RESPONSE_STATUS_OK} from "../services/API";

export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  };

  static defaultProps = {
    posts: []
  };

  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      posts: []
    };
    this.renderItem = this.renderItem.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate();
    console.log(newProps);
  }

  _search(keyword) {

  }

  _getRecentPosts() {
    const {dispatch} = this.props;
    dispatch(getRecentPosts(1));
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
          <Text>{this.props.dummy}</Text>
        </Button>
        <List
          dataArray={this.state.posts}
          renderRow={(item) => this.renderItem(item)}/>
      </Content>
    );
  }
}
