const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
      app: paths.appIndex
  },
  target: 'web',
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: '/node_modules/'
          }
      ],
  },
  output: {
      filename: '[name].[contenthash].js',
      path: paths.appBuild
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: paths.appHtml
    })
  ]
}