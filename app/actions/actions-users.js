/**
 * @flow
 */
'use strict';
import Types from './types-users';

export function requestLogin(username, password) {
  return {
    type: Types.REQUEST_LOGIN,
    username,
    password,
  };
}

export function generateAuthCookie(
  username: string,
  password: string,
  seconds: number,
) {
  return {
    type: Types.GENERATE_AUTH_COOKIE,
    username,
    password,
    seconds,
  };
}

export function generateAuthCookieSuccess(
  cookie: string,
  cookieName: string,
  user: Object,
) {
  return {
    type: Types.GENERATE_AUTH_COOKIE_OK,
    cookie,
    cookieName,
    user,
  };
}

export function saveUserData(user: Object) {
  // With following shape: https://puu.sh/wxQdV.png
  return {
    type: Types.SAVE_USER_DATA,
    user,
  };
}

export function listUsers(args: Object) {
  return {
    type: Types.LIST_USERS,
    args,
  };
}

export function retrievedListUsers(users: Array<any>) {
  return {
    type: Types.RETRIEVED_LIST_USERS,
    users,
  };
}

export function retrieveUser(id: number) {
  return {
    type: Types.RETRIEVE_USER,
    id,
  };
}

export function retrievedUser(user) {
  return {
    type: Types.RETRIEVED_USER,
    user,
  };
}

export function createUser(args) {
  return {
    type: Types.CREATE_USER,
    args,
  };
}

export function createdUser(user) {
  return {
    type: Types.CREATED_USER,
    user,
  };
}

export function updateUser(args) {
  return {
    type: Types.UPDATE_USER,
    args,
  };
}

export function updatedUser(params) {
  return {
    type: Types.UPDATE_USER,
    params,
  };
}

export function deleteUser(id) {
  return {
    type: Types.DELETE_USER,
    id,
  };
}

export function deletedUser(result) {
  return {
    type: Types.DELETED_USER,
    result,
  };
}

export function requestLogout() {
  return {
    type: Types.LOG_OUT,
  };
}
