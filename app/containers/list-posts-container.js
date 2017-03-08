import React, {Component} from "react";
import {View} from "react-native";
import {connect} from "react-redux";
import ListPosts from "../components/lists/list-posts";

export default class PostsContainer extends Component {
  render() {
    return (
      <ListPosts {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  const {posts} = state;
  return {posts};
}

export default connect(mapStateToProps)(ListPosts);