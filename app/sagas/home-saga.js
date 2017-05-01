/**
 * @flow
 */
"use strict";
import { call, put } from "redux-saga/effects";
import { receiveError, receivePosts } from "../actions/actions-core";
import API, { Controllers, Methods, DataStatus } from "../services/API";
const api = API.create();

export function* getPosts(action) {
  const { page, query } = action;
  try {
    const result = yield call(api.getPosts, 10, page, query);
    if (result.data.status === DataStatus.OK) {
      yield put(
        receivePosts(
          result.data.posts,
          result.data.count,
          result.data.count_total,
          result.data.pages,
          result.data.query
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
