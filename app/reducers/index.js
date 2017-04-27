"use strict";
import { combineReducers } from "redux";
import { common } from "./common";
import { posts } from "./post-listing";
import { nav } from "./navigation";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  common,
  posts,
  nav,
  form
});

export default rootReducer;
