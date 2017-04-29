/**
 * @flow
 */
"use strict";
import { call, put } from "redux-saga/effects";
import { receiveError, receiveRecentPosts } from "../actions/actions-core";
import API, { Controllers, Methods, DataStatus } from "../services/API";
const api = API.create();

export function* getRecentPosts(action) {
  try {
    const result = yield call(api.getRecentPosts, 10, action.page);
    if (result.data.status === "ok") {
      yield put(
        receiveRecentPosts(
          result.data.posts,
          result.data.count,
          result.data.count_total,
          result.data.pages
        )
      );
    } else {
      yield put(receiveError(result.data.error));
    }
  } catch (e) {
    console.log(e);
    yield put(receiveError(e));
  }
}
