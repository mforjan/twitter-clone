var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './twitterApp/app.js',
  output: {
    path: __dirname + '/build1',
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: './twitterApp/template.html',
      title: 'Twitter Clone',
    }),
    new ExtractTextPlugin("styles.css"),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader' ]
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
