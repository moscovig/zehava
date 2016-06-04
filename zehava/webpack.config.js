'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'eval',

  entry: {
    demo: ['webpack/hot/dev-server', './src/index.js']
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?stage=0', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'css?modules&localIdentName=[local]!postcss!sass'}
    ]
  },

  output: {
    filename: 'src/bundle.js'
  },

  resolve: {
    extensions: ['', '.js'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './src'
  }
};
