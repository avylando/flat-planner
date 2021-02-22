const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const paths = require('./paths');

process.env.NODE_ENV = 'production';

require('./env');

module.exports = merge(config, {
  mode: 'production',
  output: {
    publicPath: paths.appBuild
  },
});