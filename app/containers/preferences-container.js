import React, {Component} from "react";
import {connect} from "react-redux";
import ListPosts from "../components/lists/list-posts";

export default class PreferencesContainer extends Component {
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