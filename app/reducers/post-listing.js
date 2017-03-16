'use strict';
import * as Types from "../actions/types-core";
import GlobalConstants from "../utils/global-constants";

const initialState = {
  posts: [],
  page: 1,
  count: GlobalConstants.DEFAULT_NUMBER_OF_POSTS
};

export default function postListingReducer(state = initialState.posts, action = {}) {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      return initialState.posts.push(action.posts);
    case Types.RECEIVE_POSTS:
      return initialState.posts.push(action.posts);
    default:
      return state;
  }
}
