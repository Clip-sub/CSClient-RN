/**
 * @flow
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { Spinner } from 'native-base';
import HTMLParser from 'fast-html-parser';
import he from 'he';
import { getPosts, clearPosts } from '../actions/actions-core';
import { PostMenuBar } from './post-menu-bar';
import { ItemPostCard } from './items/item-post-card';
import { ItemPostGrid } from './items/item-post-grid';

export default class PostList extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    postItems: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.oneOf(['loading', 'error', 'loaded']),
    viewMode: PropTypes.oneOf(['list', 'cards', 'tiles']),
  };

  static defaultProps = {
    status: 'loading',
    viewMode: 'cards',
  };

  componentDidMount() {
    const { dispatch, currentPage } = this.props;
    dispatch(getPosts(currentPage));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearPosts());
  }

  onEndReached = () => {
    const { dispatch, status, currentPage } = this.props;
    if (status !== 'loading') dispatch(getPosts(currentPage + 1));
  };

  renderListItem = item => {
    const itemNode = HTMLParser.parse(he.unescape(item.content));
    const imageLink = itemNode.querySelector('img').attributes['data-lazy-src'];

    return (
      <ItemPostCard
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

  renderGridItem = item => {
    const itemNode = HTMLParser.parse(he.unescape(item.content));
    const imageLink = itemNode.querySelector('img').attributes['data-lazy-src'];

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
        renderItem={({ item }) => this.renderListItem(item)}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
        ListFooterComponent={this.renderLoadingIndicator}
      />
    );
  }

  renderPostGrid(posts) {
    return (
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderGridItem(item)}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={2}
        numColumns={2}
        style={{ alignSelf: 'stretch' }}
        columnWrapperStyle={{
          marginTop: 5,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        ListFooterComponent={this.renderLoadingIndicator}
      />
    );
  }

  render() {
    const { status, postItems } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
        {this.renderPostMenuBar()}
        {status === 'loaded' ? this.renderPostList(postItems) : <Spinner />}
      </View>
    );
  }
}
