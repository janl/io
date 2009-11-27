#!/bin/sh -ex

# create short
curl -X POST 'http://127.0.0.1:5984/io-qr/_design/io/_update/shorten?target=http://example.com';

