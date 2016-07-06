var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname)); // look into

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
    console.log('Listening at http://localhost:' + port);
});
