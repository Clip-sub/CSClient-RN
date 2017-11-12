/**
 * @flow
 */

'use strict';

import { call, put } from 'redux-saga/effects';
import { receiveCategories } from '../actions/actions-categories';
import API from '../services/api-auth';

const api = API.create();

export function* getCategories(action) {
  const { page } = action;
  try {
    const result = yield call(api.getCategoryIndex, { page });
    console.log(result);
    if (result.ok) {
      yield put(receiveCategories(result.data.categories, page));
    } else {
      console.log('Error');
    }
  } catch (error) {
    console.log(error);
  }
}
