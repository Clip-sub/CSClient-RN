'use strict';
import * as Types from "./action-types-core";
import API, {ResponseStatus} from "../api/APIClient";

export function getPosts(page: number, perPage: ?number = 1, args: ?Object = {}) {
  return dispatch => {
    return dispatch => {
      return API.getPosts(page, perPage, args)
        .then(response => ResponseStatus.OK ? 
          dispatch(receivePosts(response)) : dispatch(receiveError(response)))
        .catch(error => dispatch(receiveError(error)));
    }
  }
}

export function getRecentPosts(page: number, perPage: ?number = 1) {
  return dispatch => {
    return API.getRecentPosts(page, perPage)
      .then(response => response.status === ResponseStatus.OK ?
        dispatch(receiveRecentPosts(response)) : dispatch(receiveError(response)))
      .catch(error => dispatch(gotError(error)));
  }
}

export function receivePosts(posts: Array<Object>, count: number, countTotal: number, pages: number, query: ?Object) {
  return {
    type: Types.RECEIVE_POSTS,
    posts: posts,
    count: count,
    countTotal: countTotal,
    pages: pages,
    query: query
  }
}

export function receiveRecentPosts(recentPosts: Array<Object>, count: number, countTotal: number, pages: number) {
  return {
    type: Types.RECEIVE_RECENT_POSTS,
    posts: recentPosts,
    count: count,
    countTotal: countTotal,
    pages: pages
  }
}

export function receivePost(post: Object, nextUrl, previousUrl) {
  return {
    type: Types.RECEIVE_POST,
    nextUrl: nextUrl,
    previousUrl: previousUrl
  }
}

export function receivePage(page: Object) {
  return {
    type: Types.RECEIVE_PAGE,
    page: page
  }
}

export function receiveCategoryIndex(categories: ?Array<any> = [], count: number = 0) {
  return {
    type: Types.RECEIVE_CATEGORY_INDEX,
    count: count
  }
}

export function receiveNonce(nonce: string, controller: string, method: string) {
  return {
    type: Types.RECEIVE_NONCE,
    nonce: nonce,
    controller: controller,
    method: method
  }
}

export function receiveError(error) {
  return {
    type: Types.RECEIVE_ERROR,
    error: error
  }
}
