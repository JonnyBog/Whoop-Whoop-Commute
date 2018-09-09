const webpackProd = require('./webpack.prod.js');
const webpackDev = require('./webpack.dev.js');

if (process.env.NODE_ENV === 'production') {
  module.exports = webpackProd;
} else {
  module.exports = webpackDev;
}
