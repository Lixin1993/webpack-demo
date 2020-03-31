const merge = require('webpack-merge')
const HtmlWebpack = require('html-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    port: 9001,
    open: true,
    hot: true,
    openPage: './index.html',
    compress: true,
  },
  stats: {
    errors: true,
    colors: true,
  },
  watch: true,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpack({
      title: 'webpack',
      filename: 'index.html',
      template: 'template.html',
      reactDll: '/static_dist',
    }),
  ],
})
