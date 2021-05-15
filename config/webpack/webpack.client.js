const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackBase = require('./webpack.base');
const paths = require('../paths');
const plugins = require('./plugins');

const isDev = process.env.NODE_ENV === 'production' ? false : true;

const webpackClient = {
  entry: [paths.srcClient],
  target: 'web',
  output: {
    path: path.join(paths.buildClient, paths.publicPath),
    filename: 'js/bundle.[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: paths.publicPath,
  },
  plugins: [
    ...plugins,
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

const webpackMerge = merge(webpackBase('client'), webpackClient);

module.exports = webpackMerge;
