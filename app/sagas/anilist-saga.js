/**
 * @flow
 */

'use strict';

import _ from 'lodash';
import { call } from 'redux-saga/effects';
import API from '../services/api-ani';

const credentials = require('../utils/credentials.json');

const api = API.create();

export function* fetchAnimeInfo(action) {
  const { link } = action;
  const tempArr = _.without(link.split('/'), '');
  const animeId = tempArr[tempArr.length - 1];
  console.log(credentials.ANILIST_CLIENT_SECRET);
  try {
    const result = yield call(
      api.requestClientCredentials,
      credentials.ANILIST_CLIENT_ID,
      credentials.ANILIST_CLIENT_SECRET,
    );
    const { data } = result;
    if (data.access_token) {
      const animeInfo = yield call(
        api.getAnimeInfo,
        animeId,
        data.access_token,
      );
      console.log(animeInfo);
    }
  } catch (e) {
    console.log(e);
  }
}

export function* searchAnime(keyword: string) {
  yield null;
}
