var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.render(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
    console.log('Listening at http://localhost:' + port);
});
