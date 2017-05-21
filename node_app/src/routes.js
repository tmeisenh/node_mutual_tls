"use strict";

const Handler = require('./handler.js');

class Routes {

  constructor() {
  }

  routes() {
    return [
      {
        method: 'GET',
        path: '/hello',
        config : {
          handler: function(request, reply) {
            const requestHandler = new Handler();
            reply(requestHandler.hello());
          }
        }
      },
      {
        method: 'GET',
        path: '/echo',
        config : {
          handler: function(request, reply) {
            const requestHandler = new Handler();
            reply(requestHandler.echo(request));
          }
        }
      },
      {
        method: 'GET',
        path: '/env',
        config : {
          handler: function(request, reply) {
            const requestHandler = new Handler();
            reply(requestHandler.env(request));
          }
        }
      },
      {
        method: 'GET',
        path: '/puke',
        config : {
          handler: function(request, reply) {
            const requestHandler = new Handler();
            reply(requestHandler.puke(request));
          }
        }
      }
    ];
  }
};

module.exports = Routes;
