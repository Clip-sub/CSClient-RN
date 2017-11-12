/**
 * @flow
 */

'use strict';

import apisauce from 'apisauce';

const Status = {
  OK: 200,
  ERROR_404: 404,
};

const create = (baseURL = 'https://anilist.co/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeout: 5000,
  });

  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce);
  }

  const requestClientCredentials = (clientId: string, clientSecret: string) => {
    return api.post('auth/access_token', {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    });
  };

  const getAnimeInfo = (id: number, accessToken: string) =>
    api.get('anime/' + id + '?access_token=' + accessToken);

  return {
    requestClientCredentials,
    getAnimeInfo,
  };
};

export default { create };
