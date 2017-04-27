/**
 * @flow
 */
"use strict";
import { takeLatest, fork } from "redux-saga/effects";
import API from "../services/API";
import CoreTypes from "../actions/types-core";
import UserTypes from "../actions/types-user";
import MiscTypes from "../actions/types-misc";
import { getRecentPosts } from "./home-saga";
import { login } from "./auth-saga";

const api = API.create();

function* rootSaga() {
  yield [
    takeLatest(CoreTypes.GET_RECENT_POSTS, getRecentPosts, api),
    takeLatest(UserTypes.REQUEST_LOGIN, login),
    // fork(startup),
  ];
}

export default rootSaga;
