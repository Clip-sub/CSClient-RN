/**
 * @flow
 */

'use strict';

import Fuse from 'fuse.js';
import Types from '../actions/types-categories';

const INITIAL_STATE = {
  loading: true,
  list: [],
  listFiltered: [],
};

export const categories = (state = INITIAL_STATE, action) => {
  const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['title'],
  };
  const fuse = new Fuse(state.list, options);
  const result = fuse.search(action.keyword);
  switch (action.type) {
    case Types.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case Types.RECEIVE_CATEGORIES:
      return {
        ...state,
        loading: false,
        list: action.categories,
        listFiltered: action.categories,
      };
    case Types.FILTER_CATEGORIES:
      return {
        ...state,
        listFiltered: action.keyword ? result : state.list,
      };
    default:
      return state;
  }
};
