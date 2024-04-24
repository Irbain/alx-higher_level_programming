#!/usr/bin/node
// Import the request module
const request = require('request');

// API url endpoint
const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    // Parse the body to Json object for easy access to key
    const object = JSON.parse(body);
    const results = object.results;
    let count = 0;
    for (let i = 0; i < object.count; i++) {
      const characters = results[i].characters;
      for (let j = 0; j < characters.length; j++) {
        if (characters[j].match(18)) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
