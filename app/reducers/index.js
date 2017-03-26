
'use strict';
import {combineReducers} from 'redux';
import {counter} from './post-listing';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;