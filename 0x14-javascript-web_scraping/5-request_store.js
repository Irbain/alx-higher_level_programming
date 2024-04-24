#!/usr/bin/node
// Import the request module to get content of a webpage
const request = require('request');
// Import the fs module to perform operation on files
const fs = require('fs');
// Stored first and second cmdline arguments as url and filepath resp.
const url = process.argv[2];
const filepath = process.argv[3];

// Request for the content of the url specified above
request.get(url, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(filepath, body, (err, data) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
