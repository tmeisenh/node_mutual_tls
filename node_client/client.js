'use strict';

const fs = require('fs'); 
const https = require('https'); 

const ca1 = {
  key: fs.readFileSync('../ssl/clients/alice/private/alice.key.pem'), 
  cert: fs.readFileSync('../ssl/clients/alice/certs/alice.cert.pem'), 
  ca: fs.readFileSync('../ssl/chain/ca-chain.cert.pem'),
};

const ca2 = {
  key: fs.readFileSync('../ssl/other_ca/clients/alice/private/alice.key.pem'), 
  cert: fs.readFileSync('../ssl/other_ca/clients/alice/certs/alice.cert.pem'), 
  ca: fs.readFileSync('../ssl/other_ca/chain/ca-chain.cert.pem'),
};

// Server knows who we are.
const options1 = { 
  hostname: 'localhost', 
  port: 4433, 
  path: '/hello.txt', 
  method: 'GET', 
  key: ca1.key,
  cert: ca1.cert,
  ca: ca1.ca,
  rejectUnauthorized: true,
  checkServerIdentity: ((host, cert) => {
    console.log('server: ', host, ' presented certificate: ',cert);
    return host === 'localhost' ?  undefined : 'Hostname was not localhost';
  })
};

// Server doesn't know who we are so it hangs up the socket.
const options2 = { 
  hostname: 'localhost', 
  port: 4433, 
  path: '/hello.txt', 
  method: 'GET', 
  key: ca2.key,
  cert: ca2.cert,
  ca: ca2.ca,
  rejectUnauthorized: true,
  checkServerIdentity: ((host, cert) => {
    console.log('server: ', host, ' presented certificate: ',cert);
    return host === 'localhost' ?  undefined : 'Hostname was not localhost';
  })
};

// Server knows who we are but we don't know who the server is.
// Present a valid cert/key to auth against the server but use a different CA
// for client-side verification of the server in the client's trust store.
const options3 = { 
  hostname: 'localhost', 
  port: 4433, 
  path: '/hello.txt', 
  method: 'GET', 
  key: ca1.key,
  cert: ca1.cert,
  ca: ca2.ca,
  rejectUnauthorized: true,
  checkServerIdentity: ((host, cert) => {
    console.log('server: ', host, ' presented certificate: ',cert);
    return host === 'localhost' ?  undefined : 'Hostname was not localhost';
  })
};

https.get(options1, (response) => {
  response.on('data', (data) => {
    process.stdout.write(data);
  });
}).on('error', (error) => {
  console.error(error);
});
