/**
 * @flow
 */
'use strict';
import * as ActionTypes from '../actions/action-types';

const initialRoute = {path: 'home'};
const initialState = {route: initialRoute};

export default function navigator(state = initialRoute, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_PATH:
      console.log(JSON.stringify(Object.assign({}, state, {route: action.route})));
      return Object.assign({}, state, {
        route: action.route
      });
    default:
      return state;
  }
}