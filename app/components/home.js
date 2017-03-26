/**
 * @flow
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {View, Dimensions} from "react-native";
import {Content, Button, Text, List, ListItem} from "native-base";
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
  }

  _search(keyword) {

  }

  _getRecentPosts() {
    /*API.create().getRecentPosts()
      .then(response => response.status === RESPONSE_STATUS_OK ? this.setState({posts: response.data.posts}) : null)
      .catch(error => console.log(error));*/
    const {dispatch} = this.props;
    console.log(dispatch);
    dispatch({type: 'GET_RECENT_POSTS'});
    dispatch({type: 'INCREMENT'});
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
          <Text>Press here to load</Text>
          <Text>{this.props.counter}</Text>
        </Button>
        <List
          dataArray={this.state.posts}
          renderRow={(item) => this.renderItem(item)}/>
      </Content>
    );
  }
}
