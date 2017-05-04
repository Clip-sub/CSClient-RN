/**
 * @flow
 */
"use strict";
import React, { Component, PropTypes } from "react";
import { View, FlatList } from "react-native";
import { List, Spinner } from "native-base";
import { getRecentPosts, clearPosts } from "../actions/actions-core";
import { PostMenuBar } from "./post-menu-bar";
import { ItemPostCard } from "./items/item-post-card";

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

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(getRecentPosts(page));
  }

  componentWillUnmount() {
    const { dispatch, page } = this.props;
    dispatch(clearPosts());
  }

  onEndReached = () => {
    const { dispatch, status, page } = this.props;
    if (status !== "loading") dispatch(getRecentPosts(page + 1));
  }

  renderItem = (item) => {
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

  renderPostMenuBar = () => <PostMenuBar {...this.props} />

  renderLoadingIndicator = () => <Spinner />

  renderPostList(posts) {
    return (
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => this.renderItem(item)}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={2}
        ListHeaderComponent={this.renderPostMenuBar}
        ListFooterComponent={this.renderLoadingIndicator}/>
    );
  }

  render() {
    const { status, postItems } = this.props;

    return (
      <View style={{ flex: 1, alignSelf: "stretch", alignItems: "center" }}>
        { status === "loaded" ? this.renderPostList(postItems) : <Spinner /> }
      </View>
    );
  }
}
