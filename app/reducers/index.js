"use strict";
import { combineReducers } from "redux";
import { posts } from "./post-listing";
import { nav } from "./navigation";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  posts,
  nav,
  form
});

export default rootReducer;
