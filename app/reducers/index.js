
'use strict';
import {combineReducers} from 'redux';
import {posts} from './post-listing';
//import {navigator} from './navigator';

const rootReducer = combineReducers({
  posts,
  //navigator
});

export default rootReducer;