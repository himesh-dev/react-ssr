require('ignore-styles');
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'css-modules-transform',
      {
        camelCase: true,
        extensions: ['.css', '.scss'],
      },
    ],
    [
      'file-loader',
      {
        name: '[name].[ext]',
        extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
        publicPath: '/static/assets',
        outputPath: '/assets',
        limit: false,
        emitFile: false,
      },
    ],
    'dynamic-import-node',
  ],
});

require('./server');
