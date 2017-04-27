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

export function generateAuthCookie(username: string, password: string, seconds: number) {
  return {
    type: Types.GENERATE_AUTH_COOKIE,
    username,
    password,
    seconds
  };
}

export function generateAuthCookieSuccess(cookie: string, cookieName: string, user: Object) {
  return {
    type: Types.GENERATE_AUTH_COOKIE_OK,
    cookie,
    cookieName,
    user
  }
}

export function validateAuthCookie(cookie) {
  return {
    type: Types.VALIDATE_AUTH_COOKIE,
    cookie
  };
}
