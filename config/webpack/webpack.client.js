const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackBase = require('./webpack.base');
const paths = require('../paths');

const isDev = process.env.NODE_ENV === 'production' ? false : true;

const webpackClient = {
  entry: [paths.srcClient],
  target: 'web',
  output: {
    path: path.join(paths.buildClient, paths.publicPath),
    filename: 'bundle.js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    publicPath: paths.publicPath,
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
      'process.env': {
        NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    isDev &&
      new ReactRefreshWebpackPlugin({
        overlay: {
          sockIntegration: 'whm',
        },
      }),
  ].filter(Boolean),
  devServer: {
    hot: true,
    compress: true,
    hotOnly: true,
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    children: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    timings: true,
    version: false,
  },
};

const webpackMerge = merge(webpackBase, webpackClient);

module.exports = webpackMerge;
