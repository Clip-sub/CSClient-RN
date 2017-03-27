/**
 * @flow
 */
'use strict';
import {fork, call, put, takeLatest, takeEvery} from "redux-saga/effects";
import API from "../services/API";
import Types from "../actions/types-core";
import {receiveRecentPosts} from "../actions/actions-core";

const api = API.create();
function* getRecentPosts(api, action) {
  try {
    yield take(Types.GET_RECENT_POSTS);
    const result = yield call(api.getRecentPosts(10, 1));
    yield put({type: Types.RECEIVE_RECENT_POSTS, data: result});
  } catch (e) {
    yield put({type: Types.RECEIVE_ERROR, message: e});
  }
}

function* rootSaga() {
  console.log('Entered rootSaga');
  yield [
    fork(getRecentPosts),
    takeLatest("GET_RECENT_POSTS", getRecentPosts)
  ];
}

export default rootSaga;