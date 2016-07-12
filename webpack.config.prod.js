var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    // add plugins for prod
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass?sourceMap'
        ]
      },
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      base: path.join(__dirname, 'src/styles/base'),
      composers: path.join(__dirname, 'src/styles/composers'),
      controllers: path.join(__dirname, 'src/components/controllers'),
      modules: path.join(__dirname, 'src/styles/modules'),
      ui: path.join(__dirname, 'src/components/ui')
    },
    extensions: ['', '.js', '.jsx', '.scss'],
    root: path.resolve('src')
  }
}
