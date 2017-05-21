'use strict';

const Hapi = require('hapi');
const Routes = require('./src/routes');

// Create a server with a host and port
const server = new Hapi.Server();
const routes = new Routes();

server.connection({ 
  host: '0.0.0.0', 
  port: process.env.PORT || 3000
});

server.route(routes.routes());
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
