/**
 * @flow
 */
'use strict';

import * as Types from "./types-misc";

export function checkConnection() {
  return dispatch => {
    dispatch({type: Types.NETWORK_CHECK_CONNECTION});
    setTimeout(() => dispatch({type: Types.NETWORK_CONNECTION_OFFLINE}), 5000);
  }
}