/**
 * @flow
 */

'use strict';

import Types from '../actions/types-content';

const POST_INIT_STATE = {
  id: 1,
  title: null,
  excerpt: '',
  content: null,
  _embedded: null,
};

export const post = (state = POST_INIT_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_POST:
      return {
        ...state,
        ...action.post,
      };
    case Types.CLEAR_POST:
      return POST_INIT_STATE;
    case Types.RECEIVE_COMMENT:
      if (state._embedded.replies) {
        state._embedded.replies[0].unshift(action.comment);
        console.log(state._embedded.replies);
      } else {
        state._embedded.replies = [[]];
        state._embedded.replies[0].unshift(action.comment);
        console.log(state._embedded.replies);
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

const POSTS_INITIAL_STATE = {
  page: 1,
  total: 0,
  totalPages: 0,
  list: [],
  loading: true,
  viewMode: 'grid',
  args: null,
};

export const posts = (state = POSTS_INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_POSTS:
      return {
        ...state,
        loading: true,
      };
    case Types.RECEIVE_POSTS:
      return {
        ...state,
        loading: false,
        page: action.page,
        total: action.total,
        totalPages: action.totalPages,
        list: state.list.concat(action.list),
      };
    case Types.CLEAR_POSTS:
      return {
        ...state,
        loading: true,
        page: 1,
        list: [],
      };
    case Types.SET_ARGS:
      console.log(action);
      return {
        ...state,
        args: action.args,
      };
    default:
      return state;
  }
};
