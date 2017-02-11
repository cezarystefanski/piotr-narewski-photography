const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/client/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: path.join(__dirname, 'client'),
  entry: {
    javascript: './index.jsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: './bundle.js',
    sourceMapFilename: './bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.sass$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true
  }
};
