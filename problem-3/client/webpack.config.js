const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: [ 'babel-loader?cacheDirectory' ],
        exclude: /node_modules/,
      },
    ],
  },

  devtool: 'eval-source-map',

  devServer: {
    host: '0.0.0.0',
    https: true,
    port: 443,
    stats: 'normal',
    watchOptions: {
      ignored: /node_modules/ // Ignore node modules for improved performance
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
    }),
  ],
};
