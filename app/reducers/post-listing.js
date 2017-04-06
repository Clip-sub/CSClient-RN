'use strict';
import Types from "../actions/types-core";
import Immutable from "seamless-immutable";

const INITIAL_STATE = [];

export const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      console.log('1111111');
      return action.posts;
    case Types.RECEIVE_POSTS:
      console.log('2222222');
      return Immutable(Object.assign({}, state, action));
    default:
      return state;
  }
};
