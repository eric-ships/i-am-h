var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:7770/__webpack_hmr',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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
        loader: 'react-hot!babel!eslint',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      composers: path.join(__dirname, '/src/styles/composers'),
      controllers: path.join(__dirname, '/src/components/controllers'),
      modules: path.join(__dirname, '/src/styles/modules'),
      ui: path.join(__dirname, '/src/components/ui')
    },
    extensions: ['', '.js', '.jsx', '.scss'],
    root: path.resolve('src')
  }
}
