/**
 * @flow
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {View, Dimensions} from "react-native";
import {Content, Button, Text, List, ListItem} from "native-base";
import PostMenuBar from "./post-menu-bar";
import ItemPostCard from "./items/item-post-card";

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
    const {navigate} = this.props.navigation;
    navigate('AuthScreen');
    const {dispatch} = this.props;
    dispatch({type: 'GET_RECENT_POSTS'});
  }

  renderItem(item) {
    return (
      <ItemPostCard
        title={''}/>
    )
  }

  render() {
    return (
      <Content>
        <PostMenuBar/>
        <Button onPress={() => this._getRecentPosts()}>
          <Text>Press here to load</Text>
        </Button>
        <List
          dataArray={this.props.posts}
          renderRow={(item) => this.renderItem(item)}/>
      </Content>
    );
  }
}
