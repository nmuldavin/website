const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
});

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    camelCase: true,
    minimize: true,
  },
};

const commonConfig = require('./webpack.common');

const customConfig = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [cssLoader, 'sass-loader'],
        fallback: 'style-loader',
      }),
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    extractSass,
  ],
};

module.exports = merge(commonConfig, customConfig);
