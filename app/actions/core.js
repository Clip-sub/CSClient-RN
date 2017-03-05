'use strict';
import * as Types from "./action-types-core";
import API from "../api/APIClient";

function getPosts(page: number, perPage: ?number = 1) {
  return dispatch => {
    return API.loadPosts;
  }
}

function getRecentPosts(page: number, perPage: ?number = 1) {
  return dispatch => {
    return API.getRecentPosts(page, perPage)
      .then(response => dispatch(gotRecentPosts(response)))
      .catch(error => dispatch(gotError(error)));
  }
}

function getUserInfo(id: number) {
  return dispatch => {
    API.getUserInfo(id)
  }
}

export function receivePosts(posts: Array<Object>, appliedArgs: Object) {
  return {
    type: Types.RECEIVE_POSTS,
    posts: posts,
    appliedArgs: appliedArgs
  }
}

export function receiveRecentPosts(recentPosts: Array<Object>) {
  return {
    type: Types.RECEIVE_RECENT_POSTS,
    posts: recentPosts
  }
}