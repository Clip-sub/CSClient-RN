/**
 * @flow
 */
'use strict';
/* ------------- Misc ------------- */
import API from "../services/API";
import {fork, call, put, takeLatest, takeEvery} from "redux-saga/effects";

/* ------------- Types ------------- */

function* getRecentPosts(action) {
  try {
    const result = yield call(API.getRecentPosts(10, 1));
    yield put({type: 'RECEIVE_RECENT_POSTS', data: result});
  } catch (e) {
    yield put({type: 'DATA_ERROR', message: e});
  }
}

function* rootSaga() {
  console.log('Entered rootSaga');
  yield [
    fork(getRecentPosts),
    takeEvery("GET_RECENT_POSTS", getRecentPosts)
  ];
}

export default rootSaga;