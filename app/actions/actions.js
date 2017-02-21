'use strict';
import Types from "./action-types";

export function loadPosts(page: number, perPage: ?number = 1) {
  return {
    type: Types.LOAD_POSTS,
    page: page,
    count: perPage
  }
}

export function loadPost(identity) {
  let i = {};
  if (typeof(identity) === 'number') {
    i.id = identity;
  } else if (typeof (identity) === 'string') {
    i.slug = identity;
  }

  return Object.assign({}, {type: Types.LOAD_POST}, i);
}

export function startSearchPost(keyword) {
  return (dispatch) => {
    _searchPost(dispatch, keyword);
  };
}

/**
 * Consists of:
 * Name.
 * Email.
 * Site.
 * Comment content.
 * As guest or not.
 * @param commentData
 */
export function submitComment(commentData) {
  // Submit comment action.
}

export function updateProfile() {
  // Update user profile.
}

export function deletePost(id) {
  // Delete post action.
}