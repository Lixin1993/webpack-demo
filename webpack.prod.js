const HtmlWebpack = require('html-webpack-plugin')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpack({
      title: 'webpack',
      filename: 'index.html',
      template: 'template.html',
      reactDll: './static_dist',
    }),
  ],
  devtool: 'hidden-source-map',
  mode: 'production',
})
