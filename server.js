'use strict';
var express = require('express');
var path = require('path'); // Import path module
var app = express();

// Serve static files from the current directory
app.use(express.static(__dirname)); // This will serve all files in the current directory

// Serve the index.html file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.get('/styles.css', function (req, res) {
  console.log('CSS file requested');
  res.sendFile(path.join(__dirname, 'styles.css'));
});
