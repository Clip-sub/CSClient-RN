'use strict';
import Types from "../actions/types-core";
import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({
  posts: [],
  page: 0,
  count: 0,
  text: 0
});

export const posts = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      console.log('111', action);
      return Object.assign({}, state, action);
    case Types.RECEIVE_POSTS:
      console.log(state);
      console.log(action);
      return Object.assign({}, state, action);
    case 'DUMMY':
      console.log(state);
      console.log(action);
      return {text: state.text + 1};
    default:
      return state;
  }
};

