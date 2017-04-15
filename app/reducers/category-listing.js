/**
 * @flow
 */
"use strict";
import Types from "../actions/types-core";
import Immutable from "seamless-immutable";

const INITIAL_STATE = [];

export const categories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.RECEIVE_CATEGORY_INDEX:
      return Immutable(action.categories);
    default:
      return state;
  }
};
