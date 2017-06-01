const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const commonConfig = require('./webpack.common');

const customConfig = {
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
