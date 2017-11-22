/**
 * @flow
 */

'use strict';

import { reducer as formReducer } from 'redux-form';
import { post, posts } from './posts';
import { categories } from './categories';
import { comments } from './comments';
import { user } from './user';
import { config } from './config';

export const rootReducer = {
  post,
  posts,
  categories,
  comments,
  user,
  config,
  form: formReducer,
};
