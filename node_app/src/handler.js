"use strict";

class Handler {
  constructor() {
  }

  hello(request) {
    return 'hello world!';
  }

  echo(request) {
    return request.params.str;
  }

  env(request) {
    return process.env;
  }

  puke(request) {
    return request.auth;
  }
}

module.exports = Handler;
