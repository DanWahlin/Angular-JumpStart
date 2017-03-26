const webpack = require('webpack'),
      webpackMerge = require('webpack-merge'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      commonConfig = require('./webpack.common.js'),
      ngToolsWebpack = require('@ngtools/webpack'),
      path = require('path'),
      rootDir = path.resolve(__dirname, '..');

var aotPlugin = new ngToolsWebpack.AotPlugin({
    tsConfigPath: "./tsconfig.aot.json",
    entryModule: path.resolve(__dirname, "./src/app/app.module#AppModule"),
});
//Temporary hack to fix issue with AOT on Windows
//https://github.com/angular/angular-cli/issues/5329
aotPlugin._compilerHost._resolve = function(path_to_resolve) {
    path_1 = require("path");
    path_to_resolve = aotPlugin._compilerHost._normalizePath(path_to_resolve);
    if (path_to_resolve[0] == '.') {
        return aotPlugin._compilerHost._normalizePath(path_1.join(aotPlugin._compilerHost.getCurrentDirectory(), path_to_resolve));
    }
    else if (path_to_resolve[0] == '/' || path_to_resolve.match(/^\w:\//)) {
        return path_to_resolve;
    }
    else {
        return aotPlugin._compilerHost._normalizePath(path_1.join(aotPlugin._compilerHost._basePath, path_to_resolve));
    }
};

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
    // new ngToolsWebpack.AotPlugin({
    //     mainPath: "src/app/main.ts",
    //     tsConfigPath: './tsconfig.aot.json'
    // }),
    aotPlugin,
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