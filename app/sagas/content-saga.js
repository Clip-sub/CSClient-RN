/**
 * @flow
 */

'use strict';

import { call, put } from 'redux-saga/effects';
import { receivePosts, receivePost } from '../actions/actions-content';
import API from '../services/api';

const api = API.create();

export function* getPosts(action) {
  const { page, args } = action;
  delete action.type;
  try {
    const result = yield call(api.listPosts, { page, ...args });
    if (result.ok) {
      const total = parseInt(result.headers['x-wp-total']);
      const totalPages = parseInt(result.headers['x-wp-totalpages']);
      yield put(receivePosts(result.data, page, total, totalPages));
    } else {
      console.log('Error');
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getPost(action) {
  const { postId, isPage } = action;
  console.log(isPage);
  try {
    if (!isPage) {
      const result = yield call(api.retrievePost, postId);
      if (result.ok) {
        yield put(receivePost(result.data));
      }
    } else {
      const result = yield call(api.retrievePage, postId);
      if (result.ok) {
        yield put(receivePost(result.data));
      }
    }
  } catch (error) {
    console.log(error);
  }
}
