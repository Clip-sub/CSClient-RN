"use strict";
import { combineReducers } from "redux";
import { common } from "./common";
import { posts } from "./post-listing";
import { categories } from "./category-listing";
import { nav, activeTabIndex } from "./navigation";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  common,
  posts,
  categories,
  nav,
  activeTabIndex,
  form
});

export default rootReducer;
