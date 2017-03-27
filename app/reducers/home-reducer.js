'use strict';
import * as Types from "../actions/types-core";
import GlobalConstants from "../utils/global-constants";
import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({
  posts: [],
  page: 0,
  count: 0
});

export const posts = (state = INITIAL_STATE.posts, action = {}) => {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      console.log(state);
      console.log(action);
      return Object.assign({}, state, action);
    case Types.RECEIVE_POSTS:
      console.log(state);
      console.log(action);
      return Object.assign({}, state, action);
    case 'DUMMY':
      return {text: 'dummy'}
    default:
      return state;
  }
}

