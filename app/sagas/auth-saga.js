/**
 * @flow
 */
"use strict";
import { call, put } from "redux-saga/effects";
import { requestLogin } from "../actions/actions-user";
import { getNonce } from "../actions/actions-core";
import { setLoading } from "../actions/actions-misc";
import API, { Controllers, Methods, DataStatus } from "../services/API";
import DataService from "../services/data-service";
const api = API.create();

export function* login(action) {
  const { username, password } = action;
  try {
    yield put(setLoading(true));
    const result = yield call(api.generateAuthCookie, username, password);
    if (result.data.status === DataStatus.OK) {
      DataService.storeUserData(result.data).done();
      yield put(setLoading(false));
      console.log('END');
    }
  } catch (error) {
    console.log(error);
  }
}
