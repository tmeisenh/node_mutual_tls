FROM node:7.7.3-wheezy

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install && mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src
ADD . /src

EXPOSE  3000
CMD ["npm", "start"]

