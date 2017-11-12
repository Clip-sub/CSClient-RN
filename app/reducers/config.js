/**
 * @flow
 */

'use strict';

import Types from '../actions/types-config';

const INIT_STATE = {
  viewMode: 'grid',
  notifications: true,
  theme: null,
};

export const config = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.viewMode,
      };
    case Types.SET_NOTIFICATION:
      return {
        ...state,
        notifications: action.notifications,
      };
    default:
      return state;
  }
};
