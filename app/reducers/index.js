
'use strict';
import {combineReducers} from 'redux';
import {posts} from './post-listing';
import {navReducer} from './navigator';

const rootReducer = combineReducers({
  posts,
  navReducer
});

export default rootReducer;