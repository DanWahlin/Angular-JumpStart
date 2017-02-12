const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  output: {
    path: path.resolve(rootDir, './src/dist'),
    sourceMapFilename: '[name].map',
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  //Example of a dev server. Not needed in this app since it uses Node/Express for the server.
  // devServer: {
  //   contentBase: './src',
  //   historyApiFallback: true,
  //   watchOptions: { aggregateTimeout: 300, poll: 1000 },
  //   quiet: true,
  //   stats: 'minimal'
  // }
});