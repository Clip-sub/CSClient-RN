/**
 * @flow
 */
'use strict';
import React, {Component} from "react";
import {Share, View} from "react-native";
import {Button, Content, Text, List} from "native-base";
import {getRecentPosts} from "../actions/actions-core";
import PostMenuBar from "./post-menu-bar";
import ItemPostCard from "./items/item-post-card";

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

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getRecentPosts(this.page));
  }

  _search(keyword) {
    Share.share({
      message: 'A framework for building native apps using React',
      url: 'http://facebook.github.io/react-native/',
      title: 'React Native'
    }, {
      dialogTitle: 'Share React Native website',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ],
      tintColor: 'green'
    })
      .then(data => console.log(data))
      .catch((error) => console.log(error));
  }

  _getRecentPosts() {
    const {dispatch} = this.props;
    dispatch(getRecentPosts(this.page));
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
    let {posts} = this.props;
    
    return (
      <Content>
        <PostMenuBar/>
        <Button title={''} onPress={() => this._search()}>
          <Text>Search</Text>
        </Button>
        <List
          dataArray={posts}
          renderRow={item => this.renderItem(item)}/>
      </Content>
    );
  }
}
