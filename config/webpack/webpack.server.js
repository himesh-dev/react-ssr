const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const webpackBase = require('./webpack.base');
const paths = require('../paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackServer = {
  entry: path.join(process.cwd(), 'src/server/index.js'),
  target: 'node',
  externals: [webpackNodeExternals()],
  output: {
    path: paths.buildServer,
    filename: 'server.js',
    publicPath: paths.publicPath,
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
    new MiniCssExtractPlugin({
      // filename: 'styles/style.css',
    }),
  ],
};
const webpackMerge = merge(webpackBase('server'), webpackServer);

module.exports = webpackMerge;
