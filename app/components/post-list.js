/**
 * @flow
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {FlatList, View} from "react-native";
import {Content, List, Spinner} from "native-base";
import {getRecentPosts} from "../actions/actions-core";
import PostMenuBar from "./post-menu-bar";
import ItemPostCard from "./items/item-post-card";

const INIT_PAGE = 1;
export default class PostList extends Component {
  static propTypes = {
    status: PropTypes.oneOf(['loading', 'error', 'loaded']),
    viewMode: PropTypes.oneOf(['list', 'cards', 'tiles'])
  }

  static defaultProps = {
    status: 'loaded',
    viewMode: 'cards'
  }

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.page = INIT_PAGE;
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getRecentPosts(this.page));
  }

  renderItem = (item) => {
    return (
      <ItemPostCard
        title={item.title}
        excerpt={item.excerpt}
        image={'https://clip-sub.com/wp-content/uploads/2017/04/59097934-600x300.jpg'}
        commentCount={item.comment_count}
        id={item.id || ''}
        authorId={item.author.id || ''}
        authorName={item.author.name}/>
    )
  }

  renderPostMenuBar = () => {
    return (
      <PostMenuBar/>
    )
  }

  renderPostList(posts) {
    return (
      <List
        dataArray={posts}
        renderHeader={this.renderPostMenuBar}
        renderRow={this.renderItem}/>
    )
  }

  render() {
    let {status, posts} = this.props;

    return (
      <View style={{flex: 1, alignSelf: 'stretch', alignItems: 'center'}}>
        {status === 'loading' ? <Spinner/> : this.renderPostList(posts)}
      </View>
    );
  }
}
