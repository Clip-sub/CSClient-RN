/**
 * @flow
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {View, Dimensions, ListView} from "react-native";
import {Content, Button, Text, List, ListItem} from "native-base";
import {getRecentPosts, dummy} from "../actions/actions-core";
import PostMenuBar from "./post-menu-bar";
import ItemPostCard from "./items/item-post-card";
import API, {RESPONSE_STATUS_OK} from "../services/API";
import Accordion from "react-native-accordion";

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Third',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Fourth',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];
export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  };

  static defaultProps = {
    posts: []
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      fetching: true,
      posts: [],
      dataSource: ds.cloneWithRows(SECTIONS)
    };
    this.renderItem = this.renderItem.bind(this);
  }

  componentWillReceiveProps(newProps) {
    //this.forceUpdate();
    console.log(newProps);
  }

  _search(keyword) {

  }

  _getRecentPosts() {
    const {dispatch} = this.props;
    dispatch(getRecentPosts(1));
  }

  _dummy() {
    const {dispatch} = this.props;
    dispatch(dummy());
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

  _renderHeader() {
    return (
      <View style={{
        paddingTop: 15,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#a9a9a9',
        backgroundColor: '#f9f9f9',
      }}>
        <Text>Click to Expand</Text>
      </View>
    );
  }

  _renderContent() {
    return (
      <View style={{
        backgroundColor: '#31363D'
      }}>
        <Text style={{
          paddingTop: 15,
          paddingRight: 15,
          paddingBottom: 15,
          paddingLeft: 15,
          color: '#fff',
        }}>
          This content is hidden in the accordion
        </Text>
      </View>
    );
  }

  _renderRow(rowData) {
    return (
      <Accordion
        header={this._renderHeader()}
        content={this._renderContent()}
        duration={300}
        easing="easeOutCubic"
      />
    );
  }

  render() {
    return (
      <Content>
        <PostMenuBar/>
        <Button title={''} onPress={() => this._getRecentPosts()}>
          <Text>Reload Posts</Text>
        </Button>
        <Button title={''} onPress={() => this._dummy()}>
          <Text>{this.props.posts.text}</Text>
        </Button>
        <List
          dataArray={this.state.posts}
          renderRow={(item) => this.renderItem(item)}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}/>
      </Content>
    );
  }
}
