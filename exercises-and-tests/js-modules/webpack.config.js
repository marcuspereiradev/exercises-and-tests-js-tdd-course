const webpack = require('webpack');
// const nodeENV = process.env.NODE_ENV || 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: './build.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
      }
}