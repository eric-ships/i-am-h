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
      base: path.resolve('/src/styles/base'),
      composers: path.resolve('/src/styles/composers'),
      controllers: path.resolve('/src/components/controllers'),
      modules: path.resolve('/src/styles/modules'),
      ui: path.resolve('/src/components/ui')
    },
    extensions: ['', '.js', '.jsx', '.scss']
    // root: path.join(__dirname, 'src/')
    // root: path.resolve('src')
  }
}
