var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('assets'));

// Routes
app.get('/', function(req, res) {
  const dist = path.join(__dirname, '/index.html');
  res.sendFile(dist);
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);