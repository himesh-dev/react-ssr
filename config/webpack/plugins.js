const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin =
  require('html-inline-css-webpack-plugin').default;
const path = require('path');

module.exports = [
  new MiniCssExtractPlugin({
    // filename: 'styles/style.css',
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(process.cwd(), 'public/index.html'),
    inject: 'body',
  }),
  new HTMLInlineCSSWebpackPlugin(),
];
