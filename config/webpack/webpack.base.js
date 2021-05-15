const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'production' ? false : true;

const rulesClient = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  {
    test: /\.css$/,

    exclude: /node_modules/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        // options: {
        //   modules: {
        //     auto: true,
        //     localIdentName: '[name]__[local]__[hash:base64:5]',
        //   },
        // esModule: false,
        // },
      },
    ],
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: {
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        publicPath: '/static/assets',
        outputPath: '/assets',
        encoding: true,
        // emitFile: true,
        limit: false,
      },
    },
  },
  // {
  //   test: /\.(png|jpe?g|gif|svg)$/,
  //   // type: 'asset/resource',
  //   // generator: {
  //   //   filename: 'assets/[name].[hash:8].[ext]',
  //   // },
  // },
  // {
  //   test: /\.(png|svg|jpg|gif)$/,
  //   use: {
  //     loader: 'file-loader',
  //     options: {
  //       name: '[name].[ext]',
  //       publicPath: 'static/',
  //       outputPath: 'assets/images',
  //       esModule: false,
  //     },
  //   },
  // },
];
const rulesServer = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  {
    test: /\.css$/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
      },
    ],
  },
  //using url-loader to inline images
  {
    test: /\.(png|jpe?g|gif|svg)$/,
    // type: 'asset/resource',
    loader: require.resolve('url-loader'),
    options: {
      encoding: true,
      name: '[name].[ext]',
      publicPath: '/static/assets',
      outputPath: '/assets',
      emitFile: false,
    },
    // generator: {
    //   filename: 'assets/[name].[hash:8].[ext]',
    // },
  },
  // {
  //   test: /\.(png|svg|jpg|gif)$/,
  //   use: {
  //     loader: 'file-loader',
  //     options: {
  //       // emitFile: false,
  //       // limit: false,
  //       // mimetype: 'image/png',
  //       // encoding: 'utf8',
  //       esModule: false,
  //     },
  //   },
  // },
  // {
  //   test: /\.(png|svg|jpg|gif)$/,
  //   use: {
  //     loader: 'file-loader',
  //     options: {
  //       // name: '[name].[ext]',
  //       publicPath: 'static/',
  //       // outputPath: 'assets/images',
  //       // esModule: false,
  //       emitFile: false,
  //     },
  //   },
  // },
];

module.exports = (type) => ({
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [...(type === 'client' ? rulesClient : rulesServer)],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.html'],
  },
});
