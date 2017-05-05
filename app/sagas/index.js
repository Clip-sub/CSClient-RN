/**
 * @flow
 */
'use strict';
import { takeLatest } from 'redux-saga/effects';
import CoreTypes from '../actions/types-core';
import UserTypes from '../actions/types-user';
import { getPosts, getCategoryIndex } from './home-saga';
import { login } from './auth-saga';

function* rootSaga() {
  yield [
    takeLatest(CoreTypes.GET_POSTS, getPosts),
    takeLatest(CoreTypes.GET_CATEGORY_INDEX, getCategoryIndex),
    takeLatest(UserTypes.REQUEST_LOGIN, login),
    // fork(startup),
  ];
}

export default rootSaga;
