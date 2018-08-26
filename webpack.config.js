const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry : './src/index.js',
  output : { 
    publicPath : '/dist/',
    path : '/dist',
    filename : 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /.js?$/,
        loader : 'babel-loader',
        exclude : /node_modules/,
        query : {
          presets : ['es2015', 'react']
        }
      },
      {
        test : /\.(png)$/,
        use : [
          {
            loader : 'file-loader',
            options : {}
          }
        ]
      }
    ]
  },
  mode : 'development',



};