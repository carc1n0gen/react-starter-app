const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    '@babel/polyfill',
    'whatwg-fetch',
    'react-hot-loader/patch',
    APP_DIR + '/index.js',
  ],
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [{
      test : /\.jsx?$/,
      include : APP_DIR,
      loader : 'babel-loader'
    },{
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader 
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMaps: true
          }
        }
      ]
    },{
      test: /\.(ttf|eot|svg|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]&outputPath=fonts/'
    },{
      test: /\.txt$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      disable: process.env.NODE_ENV === 'development'
    })
  ],
  devServer: {
    historyApiFallback: true,
  }, 
};
