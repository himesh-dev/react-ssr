const webpackClient = require('./webpack.client');
const webpackServer = require('./webpack.server.js');

module.exports = () => {
  return [webpackClient, webpackServer];
};
