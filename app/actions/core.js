'use strict';
import Types from "./action-types";

export function getPosts(page: number, perPage: ?number = 1) {
  return dispatch => {
    return API.loadPosts;
  }
}

export function getRecentPosts(page: number, perPage: ?number = 1) {
  return dispatch => {
    return API.getRecentPosts(page, perPage)
      .then(response => dispatch(gotRecentPosts(response)))
      .catch(error => dispatch(gotError(error)));
  }
}

export function getUserInfo(id: number) {
  return dispatch => {
    APIClient.
  }
}