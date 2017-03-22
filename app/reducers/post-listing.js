'use strict';
import * as Types from "../actions/types-core";
import GlobalConstants from "../utils/global-constants";
import Immutable from "seamless-immutable";

const INITIAL_STATE = {
  posts: [],
  page: 0,
  count: GlobalConstants.DEFAULT_NUMBER_OF_POSTS
};

export default function postListingReducer(state = INITIAL_STATE.posts, action = {}) {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      console.log(action.posts);
      return INITIAL_STATE.posts.push(action.posts);
    case Types.RECEIVE_POSTS:
      return INITIAL_STATE.posts.push(action.posts);
    default:
      return state;
  }
}
