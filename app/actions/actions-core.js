'use strict';
import API, {ResponseStatus} from "../common/API";

const CREATE_POST = 'CREATE_POST';
const RECEIVE_NONCE = 'RECEIVE_NONCE';
const RECEIVE_POST = 'RECEIVE_POST';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
const RECEIVE_PAGE = 'RECEIVE_PAGE';
const RECEIVE_RECENT_POSTS = 'RECEIVE_RECENT_POSTS';
const RECEIVE_CATEGORY_INDEX = 'RECEIVE_CATEGORY_INDEX';
const RECEIVE_ERROR = 'RECEIVE_ERROR';

export function getPosts(page: number, perPage: ?number = 1, args: ?Object = {}) {
  return dispatch => {
    return API.getPosts(page, perPage, args)
      .then(response => ResponseStatus.OK ?
        dispatch(receivePosts(response)) : dispatch(receiveError(response)))
      .catch(error => dispatch(receiveError(error)));
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
    type: RECEIVE_POSTS,
    posts: posts,
    count: count,
    countTotal: countTotal,
    pages: pages,
    query: query
  }
}

export function receiveRecentPosts(recentPosts: Array<Object>, count: number, countTotal: number, pages: number) {
  return {
    type: RECEIVE_RECENT_POSTS,
    posts: recentPosts,
    count: count,
    countTotal: countTotal,
    pages: pages
  }
}

export function receivePost(post: Object, nextUrl, previousUrl) {
  return {
    type: RECEIVE_POST,
    nextUrl: nextUrl,
    previousUrl: previousUrl
  }
}

export function receivePage(page: Object) {
  return {
    type: RECEIVE_PAGE,
    page: page
  }
}

export function receiveCategoryIndex(categories: ?Array<any> = [], count: number = 0) {
  return {
    type: RECEIVE_CATEGORY_INDEX,
    count: count
  }
}

export function receiveNonce(nonce: string, controller: string, method: string) {
  return {
    type: RECEIVE_NONCE,
    nonce: nonce,
    controller: controller,
    method: method
  }
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error: error
  }
}
