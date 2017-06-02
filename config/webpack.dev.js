const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const commonConfig = require('./webpack.common');

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    camelCase: true,
  },
};

const customConfig = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', cssLoader, 'sass-loader'],
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
  },
};

module.exports = merge(commonConfig, customConfig);
