/**
 * @flow
 */
"use strict";
import React, { Component, PropTypes } from "react";
import { View } from "react-native";
import { List, Spinner } from "native-base";
import { getRecentPosts } from "../actions/actions-core";
import { PostMenuBar } from "./post-menu-bar";
import ItemPostCard from "./items/item-post-card";

const INIT_PAGE = 1;
export default class PostList extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    postItems: PropTypes.array,
    status: PropTypes.oneOf(["loading", "error", "loaded"]),
    viewMode: PropTypes.oneOf(["list", "cards", "tiles"])
  };

  static defaultProps = {
    status: "loading",
    viewMode: "cards"
  };

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.page = INIT_PAGE;
  }

  componentDidMount() {
    const { dispatch, page } = this.props;
    setTimeout(() => dispatch(getRecentPosts(page)), 300);
  }

  onEndReached = () => {
    const { dispatch, page } = this.props;
    dispatch(getRecentPosts(page + 1));
  }

  renderItem = item => {
    return (
      <ItemPostCard
        id={item.id || ""}
        title={item.title}
        excerpt={item.excerpt}
        image={
          "https://clip-sub.com/wp-content/uploads/2017/04/59097934-600x300.jpg"
        }
        commentCount={item.comment_count}
        authorId={item.author.id || ""}
        authorName={item.author.name}
        {...this.props}
      />
    );
  };

  renderPostMenuBar = () => {
    return <PostMenuBar {...this.props} />;
  };

  renderPostList(posts) {
    return (
      <List
        dataArray={posts}
        renderHeader={this.renderPostMenuBar}
        renderRow={this.renderItem}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={2}
      />
    );
  }

  render() {
    let { status, postItems } = this.props;

    return (
      <View style={{ flex: 1, alignSelf: "stretch", alignItems: "center" }}>
        {status === "loaded" ? <Spinner /> : this.renderPostList(postItems)}
      </View>
    );
  }
}
