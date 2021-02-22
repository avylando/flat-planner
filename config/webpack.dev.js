const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const paths = require('./paths');

process.env.NODE_ENV = 'development';

require('./env');

const DEFAULT_PORT = 3000;

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.appBuild,
    port: process.env.REACT_APP_PORT || DEFAULT_PORT,
  },
});