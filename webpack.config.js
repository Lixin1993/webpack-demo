const path = require('path');
const htmlWebpack = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  // JavaScript 执行入口文件
  entry: './index.tsx',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[hash].bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'production',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ts-loader' },
        ]
      },
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          
        ]
      },
    ]
  },
  plugins: [
    new htmlWebpack({
      title: 'webpack',
      filename: 'index.html',
      template: 'template.html',
    }),
  ],
  devtool: 'cheap-eval-source-map',
};

if (isDev) {
  config.devServer = {
    port: 9001,
    open: true,
    hot: true,
    openPage: './index.html'
  }
  config.mode = 'development'
}

module.exports = config