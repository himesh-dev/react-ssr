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
    //below plugin is for rendering image on server by making import inline
    [
      'inline-import-data-uri',
      {
        extensions: ['.jpg', '.jpeg', '.png', '.svg'],
      },
    ],
    //below line is to add image path in html in dev mode
    // [
    //   'file-loader',
    //   {
    //     name: '[name].[ext]',
    //     extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
    //     publicPath: '/static/assets',
    //     outputPath: '/assets',
    //     limit: false,
    //     emitFile: false,
    //   },
    // ],
    'dynamic-import-node',
  ],
});

require('./server');
