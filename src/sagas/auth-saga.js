/**
 * @flow
 */

'use strict';

import { call } from 'redux-saga/effects';
import API, { DataStatus } from '../services/api-auth';
import DataService from '../services/data-service';

const api = API.create();

export function* login(action) {
  const { username, password } = action;
  try {
    const result = yield call(api.generateAuthCookie, username, password);
    console.log(result);
    if (result.data.status === DataStatus.OK) {
      // DataService.storeUserData(result.data).done();
      console.log(result.data);
    } else {
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
}
