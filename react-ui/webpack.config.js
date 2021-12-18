const path = require('path');
const webpack = require("webpack")

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader",'sass-loader'],
        
      },
      {
        test: /\.(png|jpe?g|gif|jpg|svg)$/i,
        use: 'file-loader'
      }
    ]
  }
};