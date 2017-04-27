/**
 * @flow
 */
"use strict";
import { call, put } from "redux-saga/effects";
import { requestLogin } from "../actions/actions-user";
import { getNonce } from "../actions/actions-core";
import API, { Controllers, Methods, DataStatus } from "../services/API";
const api = API.create();

export function* login(action) {
  const { username, password, seconds } = action;
  try {
    // cookie, cookie_name, status
    const result = yield call(api.generateAuthCookie, username, password, seconds);
    if (result.data.status === DataStatus.OK) {
      
    }
  } catch (error) {

  }
}
