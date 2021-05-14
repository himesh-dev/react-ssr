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
      loader: 'file-loader',
      options: { outputPath: 'static/assets/' },
    },
  },
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
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
    ],
  },
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
