/**
 * @flow
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { Spinner } from 'native-base';
import HTMLParser from 'fast-html-parser';
import he from 'he';
import { getRecentPosts, clearPosts } from '../actions/actions-core';
import { PostMenuBar } from './post-menu-bar';
import { ItemPostCard } from './items/item-post-card';
import { ItemPostGrid } from './items/item-post-grid';

export default class PostList extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    postItems: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.oneOf(['loading', 'error', 'loaded']),
    viewMode: PropTypes.oneOf(['list', 'cards', 'tiles']),
  };

  static defaultProps = {
    status: 'loading',
    viewMode: 'cards',
  };

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(getRecentPosts(page));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearPosts());
  }

  onEndReached = () => {
    const { dispatch, status, page } = this.props;
    if (status !== 'loading') dispatch(getRecentPosts(page + 1));
  };

  renderItem = item => {
    //console.log(ImageParser.getImageUrlsFromDocument('ddd'));
    //console.log(he.unescape(item.content));
    const itemNode = HTMLParser.parse(he.unescape(item.content));
    //console.log(itemNode.querySelector('img').attributes['data-lazy-src']);
    const imageLink = itemNode.querySelector('img').attributes['data-lazy-src'];
    console.log(imageLink);

    return (
      <ItemPostGrid
        id={item.id || ''}
        title={he.unescape(item.title)}
        excerpt={item.excerpt}
        image={
          imageLink
            ? imageLink
            : 'https://clip-sub.com/wp-content/uploads/2017/04/59097934-600x300.jpg'
        }
        commentCount={item.comment_count}
        authorId={item.author.id || ''}
        authorName={item.author.name}
        {...this.props}
      />
    );
  };

  renderPostMenuBar = () => <PostMenuBar {...this.props} />;

  renderLoadingIndicator = () => <Spinner />;

  renderPostList(posts) {
    return (
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderItem(item)}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={2}
        numColumns={2}
        columnWrapperStyle={{ marginTop: 5, marginLeft: 5 }}
        ListFooterComponent={this.renderLoadingIndicator}
      />
    );
  }

  render() {
    const { status, postItems } = this.props;

    return (
      <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
        {this.renderPostMenuBar()}
        {status === 'loaded' ? this.renderPostList(postItems) : <Spinner />}
      </View>
    );
  }
}
