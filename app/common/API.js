/**
 * @flow
 */
'use strict';

const BASE_API = 'https://clip-sub.com/api/';

export const ResponseStatus = {
  OK: 'ok',
  ERROR: 'error'
}

const API_GET_NONCE = 'get_nonce/';
const API_GET_POSTS = 'get_posts/';
const API_GET_POST = 'get_post/';
const API_GET_PAGE_INDEX = 'get_page_index/';
const API_GET_PAGE = 'get_page/';

export default let API = {
  /**
   * @param controller Name of the controller, e.g: posts
   * @param method Name of the method, e.g: create_post
   * @returns {Promise.<*>}
   */
  async getNonce(controller: string, method: string) {
    try {
      const response = await fetch(BASE_API + GET_NONCE + '?controller=' + controller + '&method=' + method);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  },

  async getPosts(page: ?number = 1, count: ?number = 10) {
    try {
      const response = await fetch(BASE_API + API_GET_POST + '?page=' + page + '&count=' + count);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  },

  async getPost(parameter: number) {
    // Fetch post using ID.
    if (typeof parameter === 'number') {
      try {
        const response = await fetch(BASE_API + API_GET_POSTS + '?id=' + parameter);
        return await response.json();
      } catch (error) {
        console.log(error);
      }
    }
    // Fetch post using slug.
    else {
      try {
        const response = await fetch(BASE_API + API_GET_POSTS + '?slug=' + parameter);
        return await response.json();
      } catch (error) {
        console.log(error);
      }
    }

  }
};
