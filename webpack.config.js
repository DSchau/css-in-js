/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    })
  ],
  resolve: {
    alias: {
      assets: path.join(__dirname, 'assets'),
      components: path.join(__dirname, 'src/components'),
      style: path.join(__dirname, 'src/style')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname,
        exclude: [
          path.join(__dirname, 'assets'),
          /.*assets\/.*/
        ]
      },
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader?gfm=false'
      },
      {
        test: /\..+$/,
        loader: 'raw-loader',
        include: [
          path.join(__dirname, 'assets/code'),
          path.join(__dirname, 'assets/quotes'),
          /.*assets\/.*/
        ]
      },
      {
        test: /\.raw$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.svg$/,
        loaders: ['babel-loader', 'react-svg-loader'],
        include: [path.join(__dirname, 'node_modules/emojione')]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        exclude: path.join(__dirname, 'node_modules/emojione')
      }
    ]
  }
};
