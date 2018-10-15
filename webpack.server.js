const nodeExternals = require('webpack-node-externals');
const path = require('path');

const appBaseDirectory = path.join(__dirname, 'app');
const staticBaseDirectory = path.join(__dirname, 'static');
const serverBaseDirectory = path.join(__dirname, 'server');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './server/server.jsx',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: staticBaseDirectory,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(appBaseDirectory),
      path.resolve(serverBaseDirectory),
      path.resolve('node_modules/'),
      path.resolve(`${appBaseDirectory}/lib`),
      path.resolve(`${appBaseDirectory}/features`)
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'dynamic-import-node'
          ]
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: appBaseDirectory,
        use: [
          'file-loader?&name=./assets/images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: appBaseDirectory,
        use: [
          'file-loader?name=./assets/fonts/[hash].[ext]'
        ]
      },
      {
        test: /\.ejs$/,
        loader: 'raw-loader'
      }
    ]
  }
};
