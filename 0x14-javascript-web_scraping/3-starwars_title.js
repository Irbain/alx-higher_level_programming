#!/usr/bin/node
// Import the request module
const request = require('request');

// Save first argument as the movie ID
const id = process.argv[2];
// API url endpoint
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request.get(url, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    // Parse the body to Json object for easy access to key
    const object = JSON.parse(body);
    console.log(object.title);
  }
});
