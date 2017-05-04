/**
 * @flow
 */
"use strict";
import Types from "../actions/types-core";

const INITIAL_STATE = {
  status: "loading",
  categoryItems: []
};

export const categories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_CATEGORY_INDEX:
      return {
        ...state,
        status: "loaded",
        categoryItems: action.categories
      }
    default:
      return state;
  }
};
