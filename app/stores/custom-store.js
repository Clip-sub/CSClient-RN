/**
 * @flow
 */
'use strict';

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function CustomStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}