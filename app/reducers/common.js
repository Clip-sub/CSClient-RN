/**
 * @flow
 */
"use strict";
import Types from "../actions/types-misc";
import Immutable from "seamless-immutable";

const INITIAL_STATE = {
  isLoading: false
};

export const common = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};
