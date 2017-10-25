/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

config.output.publicPath = `/`;

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
]);

module.exports = config;
