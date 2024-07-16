const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
 
module.exports = merge(common, {
  mode: 'production',
  devServer: {
    client: {
      overlay: false
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});