/**
 * @flow
 */
'use strict';
import React, {Component} from "react";
import {Button, Content, List, Text, Input} from "native-base";
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
  }

  renderItem(item) {
    const thumbnail = item.attachments[0].images.featured.url;
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
        {/*<PostMenuBar/>*/}
        <Input style={{width: 120}}></Input>
        <List
          dataArray={posts}
          renderRow={item => this.renderItem(item)}/>
      </Content>
    );
  }
}
