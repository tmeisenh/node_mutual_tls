'use strict';

const fs = require('fs'); 
const https = require('https'); 

const ca1 = {
  key: fs.readFileSync('../ssl/servers/node1/private/node1.key.pem'), 
  cert: fs.readFileSync('../ssl/servers/node1/certs/node1.cert.pem'), 
  ca: fs.readFileSync('../ssl/chain/ca-chain.cert.pem'),
};

const ca2 = {
  key: fs.readFileSync('../ssl/other_ca/servers/node1/private/node1.key.pem'), 
  cert: fs.readFileSync('../ssl/other_ca/servers/node1/certs/node1.cert.pem'), 
  ca: fs.readFileSync('../ssl/other_ca/chain/ca-chain.cert.pem'),
};

const options = { 
  key: ca1.key,
  cert: ca1.cert,
  ca: ca1.ca,
  requestCert: true, 
  rejectUnauthorized: true
}; 

https.createServer(options, ((request, response) => { 
  console.log('client: ', request.connection.remoteAddress, ' presented certificate ', request.socket.getPeerCertificate());
    response.writeHead(200); 
    response.end("hello world\n"); 
})).listen(4433);
