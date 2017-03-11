var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyPlugin =webpack.optimize.UglifyJsPlugin
var config = {
  entry:path.resolve(__dirname,'./src/index.js'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        loader:'style!css',
        include:path.resolve(__dirname,'src')
      },
      {
        test:/\.less$/,
        loader:'style!css!less',
        include:path.resolve(__dirname,'src')
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'webpack搭建项目',
      template:'./src/index.html'
    }),
    new openBrowserPlugin({
      compress:false
    })
  ]
};

module.exports = config;
