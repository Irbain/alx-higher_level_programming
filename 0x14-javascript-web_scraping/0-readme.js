#!/usr/bin/node
// File path to be read stored in file variable
let file = process.argv[2];
if (!file) { file = 'emptyFile'; }

// Import the fs module and call the readFile Method
const fs = require('fs');

// Format (filename, encoding, callback Function)
fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
