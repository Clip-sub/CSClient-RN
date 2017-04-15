"use strict";
import Types from "../actions/types-core";
import Immutable from "seamless-immutable";

const INITIAL_STATE = [];

export const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      return Immutable(state.concat(action.posts));
    case Types.RECEIVE_POSTS:
      return Immutable(state.concat(action.posts));
    case Types.RELOAD_POSTS:
      return Immutable(action.posts);
    default:
      return state;
  }
};
