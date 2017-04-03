'use strict';
import Types from "../actions/types-core";
import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({});

export const posts = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      console.log('2222', action);
      return action.posts;
    case Types.RECEIVE_POSTS:
      console.log(state);
      console.log(action);
      return Immutable(Object.assign({}, state, action));
    default:
      return state;
  }
};
