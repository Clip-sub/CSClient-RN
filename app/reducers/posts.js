'use strict';
import * as Types from "../actions/types-core";

const initialState = {
  posts: [],
}

export default function entities(state = initialState.posts, action = {}) {
  switch (action.type) {
    case type.RECEIVE_RECENT_POSTS:
      return initialState.posts.push(action.posts);
    case type.RECEIVE_POSTS:
      return initialState.posts.push(action.post);
    default:
      return state;
  }
}