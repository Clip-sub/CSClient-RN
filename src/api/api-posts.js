import qs from 'querystringify';
import { api } from './factory';

export const apiPosts = {
  listPosts: args => api.get(`posts/?_embed=1` + qs.stringify(args, '&')),

  retrievePost: (id: number) => api.get(`'posts/${id}`, { _embed: 1 }),

  createPost: (args: Object) => api.post('posts', { ...args }),

  updatePost: (id, args: Object) => api.post('posts/' + id, { ...args }),

  deletePost: (id: number, force: boolean = true) =>
    api.delete('posts/' + id, { force }),
};
