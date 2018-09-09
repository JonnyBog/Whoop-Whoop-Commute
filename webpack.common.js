const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;

const appBaseDirectory = path.join(__dirname, 'app');
const serverBaseDirectory = path.join(__dirname, 'server');
const staticDirectory = path.join(__dirname, 'static');

const commonConfig = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['babel-polyfill', './app/client.jsx']
  },
  output: {
    path: staticDirectory,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(['static']),
    new RobotstxtPlugin()
  ],
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
        exclude: [/node_modules/],
        loaders: 'babel-loader',
        include: appBaseDirectory
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: appBaseDirectory,
        use: [
          'file-loader?&name=./images/[name].[ext]',
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
          'file-loader?name=./fonts/[hash].[ext]'
        ]
      },
      {
        test: /\.jsx?/,
        use: [
          'babel-loader',
          'stylelint-custom-processor-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = commonConfig;
