"use strict";
import Types from "../actions/types-core";
import Immutable from "seamless-immutable";

const INITIAL_STATE = {
  page: 1,
  postItems: [],
  status: "loading",
  viewMode: "list"
};

export const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      return {
        ...state,
        status: "loaded",
        postItems: state.postItems.concat(action.posts)
      };
    case Types.RECEIVE_POSTS:
      return {
        ...state,
        status: "loaded",
        postItems: action.posts
      };
    case Types.CLEAR_POSTS:
      return {
        ...state,
        status: "loaded",
        postItems: []
      }
    default:
      return state;
  }
};
