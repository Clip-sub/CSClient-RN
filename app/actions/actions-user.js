/**
 * @flow
 */
"use strict";
import Types from "./types-user";

export function requestLogin(username, password) {
  return {
    type: Types.REQUEST_LOGIN,
    username,
    password
  }
}

export function generateAuthCookie(username, password, nonce) {
  return {
    type: Types.GENERATE_AUTH_COOKIE,
    username,
    password,
    nonce
  };
}

export function validateAuthCookie(cookie) {
  return {
    type: Types.VALIDATE_AUTH_COOKIE,
    cookie
  };
}

