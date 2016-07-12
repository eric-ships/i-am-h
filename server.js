var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();
var port = process.env.PORT || 8080;

app.use(favicon(path.join(__dirname, 'static','images','favicon.png')));

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
  res.render(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
    console.log('Listening at http://localhost:' + port);
});
