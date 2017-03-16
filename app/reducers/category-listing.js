'use strict';

import * as Types from "../actions/types-core";

const initialState = {
  categories: []
};

export default function categoryListing(state: Array = initialState, action) {
  switch (action.type) {
    case Types.RECEIVE_CATEGORY_INDEX:
      return state.concat(action.categories);
    default:
      return state;
  }
}
