#!/usr/bin/node
// Import the fs module then call the writeFile method
const fs = require('fs');

// Filename and string to write
let filename = process.argv[2];
const string = process.argv[3];

if (!filename) { filename = ''; }

fs.writeFile(filename, string, (err, data) => {
  if (err) {
    console.error(err);
  }
});
