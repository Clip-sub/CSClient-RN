"use strict";
import { combineReducers } from "redux";
import { posts } from "./post-listing";
import { nav } from "./navigation";

const rootReducer = combineReducers({
  posts,
  nav
});

export default rootReducer;
