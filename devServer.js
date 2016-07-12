var config = require('./webpack.config.dev');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var webpack = require('webpack');

var app = express();
var compiler = webpack(config);

app.use(favicon(path.join(__dirname, 'static','images','favicon.png')));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    chunks: false,
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
