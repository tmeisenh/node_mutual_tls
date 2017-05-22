mutual_tls
==========

I just wanted to see how difficult it is in node to do mutual-tls authentication and it turns out nodejs has it pretty much built in and for both a stand-alone node server and a client you only need a few lines of code.

For the cert generation, I used my [ca project](https://github.com/tmeisenh/ca).  

* node_app - sample node app with a few endpoints.  This gets built in a Docker container and sits behind an nginx proxy.
* proxy - the above mentioned nginx proxy server that handles tls authentication for the node_app
* node_server - stand-alone nodejs server that natively implements mutual tls authentication
* node_client - a test client.

