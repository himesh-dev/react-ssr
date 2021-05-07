const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {
  srcClient: resolveApp('src/client'),
  buildClient: resolveApp('build/client'),
  srcServer: resolveApp('src/server'),
  buildServer: resolveApp('build/server'),
  publicPath: '/static/',
};

module.exports = paths;
