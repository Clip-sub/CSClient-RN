/**
 * @flow
 */
'use strict';
import API, {ResponseStatus} from "../services/API";
import Types from "./types-core";

const CREATE_POST = 'CREATE_POST';
const RECEIVE_NONCE = 'RECEIVE_NONCE';
const RECEIVE_POST = 'RECEIVE_POST';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
const RECEIVE_PAGE = 'RECEIVE_PAGE';
const RECEIVE_RECENT_POSTS = 'RECEIVE_RECENT_POSTS';
const RECEIVE_CATEGORY_INDEX = 'RECEIVE_CATEGORY_INDEX';
const RECEIVE_ERROR = 'RECEIVE_ERROR';

export function dummy() {
  return {
    type: 'DUMMY',
    text: 'dum'
  }
}

export function getPosts(page: number, count: ?number = 10, args: ?Object = {}) {
  return {
    type: Types.GET_POSTS,
    page: page,
    count: count,
    args: args
  }
}

export function getRecentPosts(page: number, count: ?number) {
  return {
    type: Types.GET_RECENT_POSTS,
    page: page,
    count: count
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
