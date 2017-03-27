
'use strict';
import {combineReducers} from 'redux';
import {posts/* categories, pages */} from './home-reducer';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;