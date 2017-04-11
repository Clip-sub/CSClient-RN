/**
 * @flow
 */
'use strict';

import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export default function CustomStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
}
