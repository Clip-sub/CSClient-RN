/**
 * @flow
 */
'use strict';

import Types from "./types-misc";

export function setLoading(isLoading: boolean) {
  return {
    type: Types.SET_LOADING,
    isLoading
  }
}
