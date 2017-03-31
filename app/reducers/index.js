
'use strict';
import {combineReducers} from 'redux';
import {posts/* categories, pages */} from './post-listing';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;