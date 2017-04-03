/**
 * @flow
 */
'use strict';
import {takeLatest} from "redux-saga/effects";
import API from "../services/API";
import Types from "../actions/types-core";
import {getRecentPosts} from "./home-saga";

const api = API.create();

function* rootSaga() {
  yield takeLatest(Types.GET_RECENT_POSTS, getRecentPosts, api);
}

export default rootSaga;
