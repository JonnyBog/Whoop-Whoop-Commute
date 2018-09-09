const Merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');

const CommonConfig = require('./webpack.common.js');
const serverConfig = require('./webpack.server.js');

module.exports = [Merge(CommonConfig, {
  plugins: [
    new WriteFilePlugin()
  ]
}), serverConfig];
