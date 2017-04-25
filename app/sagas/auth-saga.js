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
  console.log("aaaa", action);
  const { username, password } = action;
  try {
    const nonceResult = yield call(
      api.getNonce,
      Controllers.USER,
      Methods.USER.GENERATE_AUTH_COOKIE
    );
    if (nonceResult.data.status === DataStatus.OK) {
      const nonce = nonceResult.data.nonce;
      api.generateAuthCookie(username, password, nonce).then(result => console.log(result)).done();
      //const cookieResult = yield call(api.generateAuthCookie, username, password, nonce);
      //console.log(cookieResult);
    }
  } catch (e) {
    console.log(e);
  }
}
