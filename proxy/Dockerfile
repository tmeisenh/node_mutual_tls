FROM nginx

RUN apt-get update && apt-get install --yes curl procps openssl

VOLUME ["/certs"]

COPY proxy.conf /etc/nginx/nginx.conf
