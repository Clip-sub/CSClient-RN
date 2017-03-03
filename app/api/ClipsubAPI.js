/**
 * @flow
 */
'use strict';

const API_BASE_URL = 'https://clip-sub.com';
let API = {
  async loadPosts(page: number, perPage: ?number = 1) {
    try {
      const response = await fetch(API_BASE_URL + '...');
      const res = await response.json();

      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async loadRecentPosts(page: number, perPage: ?number = 1) {
    /** ... **/
  }
}

export default API;