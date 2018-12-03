const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i
          })]
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [path.resolve(__dirname, './node_modules/@babel/preset-env')]
              }
            }
          }
        ]
    },
}