/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { getPosts, clearPosts } from '../actions/actions-posts';
//import { PostMenuBar } from './post-menu-bar';
//import { ItemPostCard } from '../../components/post-listing/item-post-card';
import { ItemPostGrid } from '../../components/post-listing/item-post-grid';
import { ItemPostCard } from '../../components/post-listing/item-post-card';
import { apiPosts } from '../../api/api-posts';

export class PostList extends Component {
  static propTypes = {
    postItems: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.oneOf(['loading', 'error', 'loaded']),
    viewMode: PropTypes.oneOf(['list', 'grid']),
  };

  static defaultProps = {
    status: 'loading',
    viewMode: 'grid',
  };

  static navigatorStyle = {
    navBarSubtitleFontSize: 10,
    drawUnderNavBar: true,
    navBarTranslucent: true,
    navBarBlur: true,
  };

  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Profile',
        icon: require('../../assets/header/ic_person_outline.png'),
        id: 'profile',
      },
    ],
  };

  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    apiPosts
      .listPosts({ page: this.page })
      .then(resp => {
        console.log(resp);
        //this.setState({ posts: resp });
      })
      .catch(e => console.log(e));
  }

  onEndReached = () => {
    /*const { getPosts, posts } = this.props;
    const { loading, page, totalPages, args } = posts;
    if (!loading && page < totalPages) {
      console.log(posts);
      return getPosts(page + 1, args);
    }*/
  };

  //renderPostMenuBar = () => <PostMenuBar {...this.props} />;
  //renderLoadingIndicator = () => <Spinner color="red" />;
  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemPostCard post={item} />}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={3}
          numColumns={1}
          style={{ alignSelf: 'stretch' }}
          ListFooterComponent={this.renderLoadingIndicator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  columnWrapper: {
    marginTop: 6,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
