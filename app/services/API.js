'use strict';
// New API, API.js is legacy.
import apisauce from "apisauce";

const DataStatus = {OK: 'ok', ERROR: 'error'};
const RESPONSE_STATUS_OK = 200;
const Controllers = {
  CORE: 'core',
  RESPOND: 'respond',
  WIDGETS: 'widgets',
  POSTS: 'posts',
  USER: 'user'
};

const Methods = {
  CORE: {
    INFO: 'info',
    GET_RECENT_POSTS: 'get_recent_posts',
    GET_POSTS: 'get_posts',
    GET_POST: 'get_post',
    GET_PAGE: 'get_page',
    GET_DATE_POSTS: 'get_date_posts',
    GET_CATEGORY_INDEX: 'get_category_index',
    GET_PAGE_INDEX: 'get_page_index',
    GET_NONCE: 'get_nonce'
  },
  USER: {
    REGISTER: 'register'
  }
};

const create = (baseURL = "https://clip-sub.com/api/") => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Accept': 'application/json',
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });

  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce);
  }

  const getNonce = (method: string, controller: string) => api.get('get_nonce', {method, controller});
  const getRecentPosts = (count: number, page: number, postType: string) => api.get('get_recent_posts', {
    count: count,
    page: page,
    post_type: postType
  });
  const getPosts = (...params) => api.get('get_posts', params);

  return {
    getNonce,
    getRecentPosts,
    getPosts
  }
};

export default {create};
export {RESPONSE_STATUS_OK, DataStatus, Controllers, Methods};