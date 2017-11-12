/**
 * @flow
 */

'use strict';

import base64 from 'base-64';
import apisauce from 'apisauce';

const privilegeData = require('../utils/credentials.json');

XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;

const Status = {
  OK: 200,
  CREATED: 201,
  ERROR_404: 404,
  ERROR_500: 500,
};

const create = (baseURL = 'https://clip-sub.com/wp-json/wp/v2/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache',
    },
    timeout: 5000,
  });

  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce);
  }

  /**********************************
   * POSTS
   **********************************/
  const listPosts = (args: Object) => api.get('posts', { ...args, _embed: 1 });

  const retrievePost = (id: number) => api.get('posts/' + id, { _embed: 1 });

  const createPost = (args: Object, username, password) =>
    api.post(
      'posts',
      { ...args },
      {
        headers: {
          Authorization: 'Basic ' + base64.encode(username + ':' + password),
        },
      },
    );

  const updatePost = (id, args, username, password) => {
    api.post(
      'posts/' + id,
      { ...args },
      {
        headers: {
          Authorization: 'Basic ' + base64.encode(username + ':' + password),
        },
      },
    );
  };

  const deletePost = (
    id: number,
    force: boolean,
    username: string,
    password: string,
  ) => {
    return api.delete(
      'posts/' + id,
      { force },
      {
        headers: {
          Authorization: 'Basic ' + base64.encode(username + ':' + password),
        },
      },
    );
  };

  /**********************************
   * POSTS Revisions
   **********************************/
  const listPostRevisions = (parentId: number) => {
    api.get('posts/' + parentId + '/revisions');
  };

  const retrievePostRevision = (parentId: number, id: number) => {
    return api.get('posts/' + parentId + '/revisions' + id);
  };

  const deletePostRevision = (parentId: number, id: number) => {
    return api.delete('posts/' + parentId + '/revisions' + id);
  };

  /**********************************
   * COMMENTS
   **********************************/

  const createComment = (
    post: number,
    parent: number,
    content: string,
    authorData: Object,
  ) => {
    const { author_email, author_name, author_url } = authorData;
    return api.post('comments/', {
      post,
      parent,
      content,
      author_email,
      author_name,
      author_url,
    });
  };

  const createCommentWithAuthor = (
    post: number,
    parent: number,
    content: string,
    authorData: Object,
  ) => {
    // Author object should have: id, username, password.
    const { author, username, password } = authorData;
    return api.post(
      'comments/',
      { post, parent, content, author },
      {
        headers: {
          Authorization: 'Basic ' + base64.encode(username + ':' + password),
        },
      },
    );
  };

  const getCommentsHome = (page: number) =>
    api.get('comments/?per_page=20&page=' + page + '&_embed');

  /**********************************
   * PAGES
   **********************************/

  const retrievePage = (pageId: number) =>
    api.get('pages/' + pageId, { _embed: 1 });

  /**********************************
   * USERS
   **********************************/

  const listUsers = (args: Object) => api.get('users/', { ...args });

  const retrieveUser = (
    id: number,
    context: string,
    username: string,
    password: string,
  ) =>
    api.get(
      'users/' + id + (context ? '?context=' + context : ''),
      { context: 'edit' },
      {
        headers: {
          Authorization: 'Basic ' + base64.encode(username + ':' + password),
        },
      },
    );

  const createUser = (args: Object) =>
    api.post(
      'users/',
      { ...args },
      {
        headers: {
          Authorization:
            'Basic ' +
            base64.encode(
              privilegeData.PRIVILEGED_USER + ':' + privilegeData.APP_PASSWORD,
            ),
        },
      },
    );

  const updateUser = (id: number, args: Object) =>
    api.post('users/' + id, { ...args });

  const deleteUser = (id: number, force: boolean, reassign: number) =>
    api.delete('users/' + id, { force, reassign });

  return {
    listPosts,
    retrievePost,
    createPost,
    updatePost,
    deletePost,

    retrievePage,

    createComment,
    createCommentWithAuthor,
    getCommentsHome,

    listPostRevisions,
    retrievePostRevision,
    deletePostRevision,

    listUsers,
    retrieveUser,
    createUser,
    updateUser,
    deleteUser,
  };
};

export default { create };
export { Status };
