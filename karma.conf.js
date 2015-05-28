var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  devtool: 'eval',
  entry: [
    './scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react/addons',
      TestUtils: 'react/lib/ReactTestUtils'
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [path.join(__dirname, 'scripts'), path.join(__dirname, 'tests')]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  cache: true,
  debug: true,
  stats: {
    chunkModules: false,
    colors: true
  }
};

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'tests/index.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      './tests/**/*.js': ['webpack'],
      './scripts/**/*.js': ['webpack']
    },
    reporters: ['nyan'],
    captureTimeout: 90000,
    browserNoActivityTimeout: 60000,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};