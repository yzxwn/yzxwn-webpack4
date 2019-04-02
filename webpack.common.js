const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
              title: 'index'
        })
    ],
    module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
              }
          },
          {
              test: /\.(png|jpg|gif)$/,
              use: [
                  {
                      loader: 'url-loader',
                      options: {
                          limit: 8192,
                          name: '[name].[ext]',
                          outputPath: 'images/'
                      }
                  }
              ]
          }
      ]
    },
    resolve: {
        extensions: [ '.js' ],
        alias: {
            //js:require("img/1.jpg"), css:url("~img/1.jpg")
            img: path.resolve(__dirname, './src/img')
        }
    }
};