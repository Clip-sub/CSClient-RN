'use strict';
import Types from "../actions/types-core";
import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({
  
});

export const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      return action.posts;
    case Types.RECEIVE_POSTS:
      return Immutable(Object.assign({}, state, action));
    default:
      return state;
  }
};
