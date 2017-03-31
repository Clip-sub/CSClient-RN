import {fork, take, call, put, takeEvery} from "redux-saga/effects";
import Types from "../actions/types-core";
import {receiveRecentPosts, receiveError} from "../actions/actions-core";

export function* getRecentPosts(api, action) {
  try {
    const result = yield call(api.getRecentPosts, 10, 1);
    yield put({type: Types.RECEIVE_RECENT_POSTS, data: result.data});
  } catch (e) {
    console.log(e);
    yield put({type: Types.RECEIVE_ERROR, message: e});
  }
}
