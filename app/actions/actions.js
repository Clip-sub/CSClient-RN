'use strict';
import Types from './action-types';

export function loadPosts(page: number, perPage: ?number = 1) {
  return {
    type: Types.LOAD_POSTS
  }
}