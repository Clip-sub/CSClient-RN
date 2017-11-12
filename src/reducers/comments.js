/**
 * @flow
 */

'use strict';

import Types from '../actions/types-comments';

const INITIAL_STATE = {
  loading: true,
  page: 0,
  list: [],
};

export const comments = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_COMMENTS_HOME:
      return {
        ...state,
        page: action.page,
        loading: true,
      };
    case Types.RECEIVE_COMMENTS_HOME:
      return {
        ...state,
        page: action.page,
        loading: false,
        list: action.comments,
      };
    default:
      return state;
  }
};
