/**
 * @flow
 */

'use strict';

import { call, put } from 'redux-saga/effects';
import { receiveCommentsHome } from '../actions/actions-comments';
import API from '../services/api';

const api = API.create();

export function* getCommentsHome(action) {
  const { page } = action;
  console.log(action);
  try {
    const result = yield call(api.getCommentsHome, page);
    console.log(result);
    if (result.ok) {
      yield put(receiveCommentsHome(result.data, page));
    } else {
      console.log('Error');
    }
  } catch (error) {
    console.log(error);
  }
}
