const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');
const extractSass = new ExtractTextPlugin({
    filename: 'bundle.css',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: [
    'babel-polyfill',
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
    extensions: ['.js', '.jsx']
  },
  module : {
    loaders : [{
      test : /\.jsx?/,
      include : APP_DIR,
      loader : 'babel-loader'
    },{
      test: /\.json$/,
      loader: 'json-loader'
    },{
      test: /\.scss/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    },{
      test: /\.(ttf|eot|svg|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]&outputPath=fonts/'
    }]
  },
  plugins: [
    extractSass
  ],
  devServer: {
    historyApiFallback: true,
  }, 
};
