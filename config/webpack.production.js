const webpack = require('webpack'),
      webpackMerge = require('webpack-merge'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      commonConfig = require('./webpack.common.js'),
      ngToolsWebpack = require('@ngtools/webpack'),
      path = require('path'),
      rootDir = path.resolve(__dirname, '..');

const env = process.env.NODE_ENV;

module.exports = webpackMerge(commonConfig, {
  entry: {
    app: './src/app/main.aot.ts'
  },
  output: {
    path: path.resolve(rootDir, 'src/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: '@ngtools/webpack'
    }]
  }, 
  plugins: [
    //Angular AOT pluging
    new ngToolsWebpack.AotPlugin({
        mainPath: "src/app/main.ts",
        tsConfigPath: './tsconfig.aot.json'
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        },
        sourceMap: false
    })
  ]
});