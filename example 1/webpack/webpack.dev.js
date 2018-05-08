/**
 * Embers Project Webpack Development Configuration
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.resolve(__dirname, '../src/index.js')
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'M2GEN Intranet - Development',
      template: 'src/template.ejs'
    }),
    new webpack.DefinePlugin({
      __API_HOST__: JSON.stringify('https://api-dev.m2gen.com/'),
      __API_VERSION__: JSON.stringify('v1')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});