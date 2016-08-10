/* eslint-disable strict */
/* globals __dirname */
'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CleanPlugin = require('./utils/clean-plugin');
const NodeUtils = require('./src/app/services/common/node-service');
const appConfig = require('./config/config');

console.log(`${__dirname}, ${path.resolve(__dirname, 'src/app/index.html')}`);
const config = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new CleanPlugin({
      files: ['dist/*']
    }),
    new ExtractTextPlugin('css/bundle.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/app/index.html'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(
            process.env.NODE_ENV
        ),
        APP_CONFIG: JSON.stringify(
            appConfig
        )
      }
    })
  ],
  module: {
    exprContextCritical: false, // Suppress "The request of a dependency is an expression"
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        /* eslint-disable max-len */
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        /* eslint-enable */
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

if (NodeUtils.isProduction()) {
  console.log('is production');
  config.entry = './src/app/bootstrap';
} else {
  config.devtool = 'eval';
  config.entry = [
    `webpack-dev-server/client?http://localhost:${appConfig.example.port}`,
    'webpack/hot/only-dev-server',
    './src/app/bootstrap'
  ];
  config.plugins.push(
      new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config;
