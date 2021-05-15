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
    'dynamic-import-node',
  ],
});

require('./server');
