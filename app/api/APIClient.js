/**
 * @flow
 */
'use strict';

const API_BASE_URL = 'https://clip-sub.com/api/';
let API = {

  async getNonce(controller: string, method: string) {
    try {
      const response = await fetch(API_BASE_URL + '?controller=' + controller + '&method=' + method);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },

  async generateAuthCookie(nonce: string, username: string, password: string) {
    try {
      const response = await fetch(API_BASE_URL + 'auth/generate_auth_cookie/'
        + '?nonce=' + nonce + '&username=' + username + '&password=' + password);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },

  async validateAuthCookie(cookie: string) {
    try {
      const response = await fetch(API_BASE_URL + 'auth/validate_auth_cookie/' + '?cookie=' + cookie);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },

  async loadPosts(page: number, perPage: ?number = 1) {
    try {
      const response = await fetch(API_BASE_URL + '...');
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },

  async loadRecentPosts(page: number, perPage: ?number = 1) {
    /** ... **/
  },

  async getUserInfo(id) {
    try {
      const response = await fetch(API_BASE_URL + 'user/get_userinfo/?user_id=' + id);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },

  async getCurrentUserInfo(cookie: string) {
    try {
      const response = await fetch(API_BASE_URL + 'user/user_currentuserinfo/?cookie=' + cookie);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },
};

export default API;