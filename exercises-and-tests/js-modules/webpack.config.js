const path = require('path');

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
    // module: {
    //     rules: [
    //       {
    //         test: /\.m?js$/,
    //         exclude: /(node_modules|bower_components)/,
    //         use: {
    //           loader: 'babel-loader',
    //           options: {
    //             presets: ['@babel/preset-env']
    //           }
    //         }
    //       }
    //     ]
    //   },
}