import express from 'express';
import serverRenderer from './middleware/serverRenderer';
import path from 'path';
import paths from '../../config/paths';
import webpack from 'webpack';

const PORT = 3000;
const DEVSERVER_HOST = 'http://localhost';

const app = express();
const clientConfig = require('../../config/webpack/webpack.client');
console.log('process.env.NODE_ENV ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  clientConfig.entry = [
    `webpack-hot-middleware/client?path=${DEVSERVER_HOST}:${PORT}/__webpack_hmr`,
    ...clientConfig.entry,
  ];
  clientConfig.output.hotUpdateMainFilename = 'updates/[hash].hot-update.json';
  clientConfig.output.hotUpdateChunkFilename =
    'updates/[id].[hash].hot-update.js';

  const compiler = webpack(clientConfig);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: clientConfig.output.publicPath,
      stats: clientConfig.stats,
      serverSideRender: true,
      headers: {
        MimeType: 'text/event-stream',
      },
    })
  );
  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    })
  );
}

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: [
    'htm',
    'html',
    'js',
    'css',
    'json',
    'ico',
    'png',
    'jpg',
    'txt',
    'svg',
  ],
  index: false,
  maxAge: '180d',
  redirect: false,
  setHeaders: (res, path, stat) => {
    res.set('x-timestamp', Date.now());
  },
};
app.get('/favicon.ico', (_, res) => {
  res.send(null);
});
app.use((req, res, next) => {
  console.log(req.originalUrl, path.join(paths.buildClient, paths.publicPath));
  next();
});
app.use(
  paths.publicPath,
  express.static(path.join(paths.buildClient, paths.publicPath), options)
);

app.use(serverRenderer);

app.listen(PORT, () => {
  console.log(`SERVER is listening on: ${DEVSERVER_HOST}:${PORT}`);
});
