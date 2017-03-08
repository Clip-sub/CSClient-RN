/**
 * @flow
 */
'use strict';

import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/root";
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function CustomStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
