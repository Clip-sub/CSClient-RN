/**
 * @flow
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { Spinner, List } from 'native-base';
// import { getPosts, clearPosts } from '../actions/actions-posts';
import { PostMenuBar } from './post-menu-bar';
import { ItemPostCard } from './items/item-post-card';
import { ItemPostGrid } from './items/item-post-grid';

export default class PostList extends Component {
  static propTypes = {
    postItems: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.oneOf(['loading', 'error', 'loaded']),
    viewMode: PropTypes.oneOf(['list', 'grid']),
  };

  static defaultProps = {
    status: 'loading',
    viewMode: 'grid',
  };

  componentDidMount() {
    const { getPosts, posts } = this.props;
    const { page, args } = posts;
    getPosts(page, args);
  }

  componentWillUnmount() {
    const { clearPosts } = this.props;
    clearPosts();
  }

  onEndReached = () => {
    const { getPosts, posts } = this.props;
    const { loading, page, totalPages, args } = posts;
    if (!loading && page < totalPages) {
      console.log(posts);
      return getPosts(page + 1, args);
    }
  };

  renderPostMenuBar = () => <PostMenuBar {...this.props} />;
  renderLoadingIndicator = () => <Spinner color="red" />;

  renderPostList(items) {
    const { navigate } = this.props;
    return (
      <List
        dataArray={items}
        renderRow={item => <ItemPostCard post={item} navigate={navigate} />}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
        renderFooter={this.renderLoadingIndicator}
      />
    );
  }

  renderPostGrid(posts) {
    return (
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemPostGrid post={item} />}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
        numColumns={2}
        style={{ alignSelf: 'stretch' }}
        columnWrapperStyle={{
          marginTop: 6,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        ListFooterComponent={this.renderLoadingIndicator}
      />
    );
  }

  render() {
    const { list } = this.props.posts;
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
        {this.renderPostList(list)}
      </View>
    );
  }
}
