/**
 * @flow
 */

'use strict';

import md5 from 'blueimp-md5';

const GravatarAPI = {
  test: (email, password) => {
    const req = new XMLHttpRequest();
    req.open('POST', 'https://secure.gravatar.com/xmlrpc?user=' + md5(email));

    const xmlrpcrequest =
      '<methodCall><methodName>grav.test</methodName><params><param><value><struct><member><name>password</name><value><string>' +
      password +
      '</string></value></member></struct></value></param></params></methodCall>';
    req.send(xmlrpcrequest);

    return new Promise((resolve, reject) => {
      req.onreadystatechange = event => {
        console.log(event);
        if (req.readyState == 4) {
          if (req.status != 200) {
            reject(req);
          } else {
            resolve(req);
          }
        }
      };
    });
  },
};

export default GravatarAPI;
