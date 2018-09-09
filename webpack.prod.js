const Merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.js');
const serverConfig = require('./webpack.server.js');

const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const appBaseDirectory = path.join(__dirname, 'app');

module.exports = [Merge(commonConfig, {
  plugins: [
    new UglifyJSPlugin({
      exclude: /node_modules/,
      include: appBaseDirectory
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0
    })
  ]
}), serverConfig];
