/**
 * @flow
 */

'use strict';

import Types from './types-content';

export function getPosts(page: number, args: Object) {
  return {
    type: Types.GET_POSTS,
    page,
    args,
  };
}

export function clearPosts() {
  return {
    type: Types.CLEAR_POSTS,
  };
}

export function getPost(postId: number, isPage: boolean) {
  return {
    type: Types.GET_POST,
    postId,
    isPage,
  };
}

export function clearPost() {
  return {
    type: Types.CLEAR_POST,
  };
}

export function setPostsArgs(args: Object) {
  return {
    type: Types.SET_ARGS,
    args,
  };
}

export function receivePost(post: Object) {
  return {
    type: Types.RECEIVE_POST,
    post,
  };
}

export function receivePosts(
  list: Array,
  page: number,
  total: number,
  totalPages: number,
) {
  return {
    type: Types.RECEIVE_POSTS,
    list,
    page,
    total,
    totalPages,
  };
}

export function receiveComment(comment: Object) {
  return {
    type: Types.RECEIVE_COMMENT,
    comment,
  };
}
