import {fork, take, call, put, takeEvery} from "redux-saga/effects";
import Types from "../actions/types-core";
import {receiveRecentPosts, receiveError} from "../actions/actions-core";

export function* getRecentPosts(api, action) {
  try {
    const result = yield call(api.getRecentPosts, 10, 1);
    console.log(result.data);
    if (result.data.status === 'ok') {
      yield put(receiveRecentPosts(result.data.posts, result.data.count, result.data.count_total, result.data.pages));
    } else {
      yield put(receiveError(result.data.error));
    }
  } catch (e) {
    console.log(e);
    yield put(receiveError(e));
  }
}
