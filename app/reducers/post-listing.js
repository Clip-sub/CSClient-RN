'use strict';
import Types from '../actions/types-core';

const INITIAL_STATE = {
  currentPage: 1,
  postItems: [],
  status: 'loading',
  viewMode: 'list',
};

export const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_RECENT_POSTS:
      return {
        ...state,
        status: 'loaded',
        currentPage: action.currentPage,
        postItems: state.postItems.concat(action.posts),
      };
    case Types.RECEIVE_POSTS:
      return {
        ...state,
        status: 'loaded',
        currentPage: action.currentPage,
        postItems: state.postItems.concat(action.posts),
      };
    case Types.CLEAR_POSTS:
      return {
        ...state,
        status: 'loaded',
        currentPage: 1,
        postItems: [],
      };
    default:
      return state;
  }
};
