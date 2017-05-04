'use strict';
import apisauce from 'apisauce';

const DataStatus = { OK: 'ok', ERROR: 'error' };
const RESPONSE_STATUS_OK = 200;
const Controllers = {
  CORE: 'core',
  RESPOND: 'respond',
  WIDGETS: 'widgets',
  POSTS: 'posts',
  USER: 'user',
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
    GET_NONCE: 'get_nonce',
  },
  USER: {
    REGISTER: 'register',
    GENERATE_AUTH_COOKIE: 'generate_auth_cookie',
  },
};

const create = (baseURL = 'https://clip-sub.com/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  });

  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce);
  }

  const getNonce = (controller: string, method: string) =>
    api.get('get_nonce', { controller, method });

  // https://github.com/unshiftio/querystringify#qsstringify
  const generateAuthCookie = (
    username: string,
    password: string,
    seconds: number,
  ) => {
    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('seconds', seconds);
    return api.post('user/generate_auth_cookie', data);
  };

  const getRecentPosts = (count: number, page: number, postType: string) =>
    api.get('get_recent_posts', {
      count: count,
      page: page,
      post_type: postType,
    });

  const getPosts = (count: number, page: number, ...query) =>
    api.get('get_posts', { count: count, page: page, query });

  const getCategoryIndex = (parentId: number) =>
    api.get('get_category_index', { parent: parentId });

  const getPageIndex = () => api.get('get_page_index');

  return {
    getNonce,
    generateAuthCookie,
    getRecentPosts,
    getPosts,
    getCategoryIndex,
    getPageIndex,
  };
};

export default { create };
export { RESPONSE_STATUS_OK, DataStatus, Controllers, Methods };
