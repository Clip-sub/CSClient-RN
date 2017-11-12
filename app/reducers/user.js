/**
 * @flow
 */

'use strict';

import Types from '../actions/types-users';

const INITIAL_STATE = null;

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SAVE_USER_DATA:
      return {
        ...state,
        ...action.user,
      };
    case Types.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
