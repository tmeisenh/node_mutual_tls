#!/bin/bash

curl -X GET  http://localhost:80/hello
echo -e ""
curl -X GET  http://localhost:80/env
echo -e ""
curl -X GET  http://localhost:80/echo?str=fooo
echo -e ""
curl -X GET  http://localhost:80/puke
echo -e ""
