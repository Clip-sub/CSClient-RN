/**
 * @flow
 */
'use strict';
import { takeLatest } from 'redux-saga/effects';
import ContentTypes from '../actions/types-content';
import CategoryTypes from '../actions/types-categories';
import AniTypes from '../actions/types-anilist';
import CommentTypes from '../actions/types-comments';
import { getPosts, getPost } from './content-saga';
import { getCategories } from './categories-saga';
import { fetchAnimeInfo } from './anilist-saga';
import { getCommentsHome } from './comments-saga';

function* rootSaga() {
  yield [
    takeLatest(ContentTypes.GET_POSTS, getPosts),
    takeLatest(ContentTypes.GET_POST, getPost),
    takeLatest(CategoryTypes.GET_CATEGORIES, getCategories),
    takeLatest(AniTypes.FETCH_ANIME_INFO, fetchAnimeInfo),
    takeLatest(CommentTypes.GET_COMMENTS_HOME, getCommentsHome),
    // fork(startup),
  ];
}

export default rootSaga;
