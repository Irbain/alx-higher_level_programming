#!/usr/bin/node
// Import request module then display the status code of a GET request
const request = require('request');

// The url to request from
const url = process.argv[2];

request.get(url, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('code:', data.statusCode);
});
