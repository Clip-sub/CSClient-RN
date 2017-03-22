
'use strict';
import {combineReducers} from 'redux';
import postListingReducer from './post-listing';

const rootReducer = combineReducers({
  postListingReducer
});

export default rootReducer;