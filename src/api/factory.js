import axios from 'axios';
import base64 from 'base-64';

const BASE_URL = `https://clip-sub.com/wp-json/wp/v2`;
const urlModifier = url => `${BASE_URL}/${url}`;

let authToken = null;

export function setAuth(username: string, password: string) {
  authToken = base64.encode(username + ':' + password);
}

const addHeaders = (url: string, options) => {
  let headers = new Headers({
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache',
    ...options.headers,
  });

  if (authToken) {
    headers.append('Authorization', `Basic ${authToken}`);
  }
  return axios({
    baseURL: urlModifier(url),
    headers,
    timeout: 10000,
    ...options,
  });
};

const xhrWithPayload = (method: string) => {
  return function(url: string, payload: Object) {
    return new Promise((resolve, reject) => {
      addHeaders(url, {
        method,
        data: payload,
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

const xhrWithoutPayload = (method: string) => {
  return function(url = {}) {
    return new Promise((resolve, reject) => {
      addHeaders(url, {
        method,
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export const api = {
  setAuth,
  get: xhrWithoutPayload('GET'),
  delete: xhrWithoutPayload('DELETE'),
  post: xhrWithPayload('POST'),
  put: xhrWithPayload('PUT'),
};
