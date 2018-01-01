import { api } from './api-factory';

export const apiPosts = {
  listPosts: args => api.get('posts', { ...args, _embed: 1 }),

  retrievePost: (id: number) => api.get(`'posts/${id}`, { _embed: 1 }),

  createPost: (args: Object) => api.post('posts', { ...args }),

  updatePost: (id, args: Object) => api.post('posts/' + id, { ...args }),

  deletePost: (id: number, force: boolean) =>
    api.delete('posts/' + id, { force }),
};
