#!/bin/bash

curl -X GET  http://localhost:3000/hello
echo -e ""
curl -X GET  http://localhost:3000/env
echo -e ""
curl -X GET  http://localhost:3000/echo?str=fooo
echo -e ""
curl -X GET  http://localhost:3000/puke
echo -e ""
