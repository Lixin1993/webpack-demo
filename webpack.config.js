const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const HappyPack = require('happypack')

const happyThreadPool = HappyPack.ThreadPool({ size: 10 })

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  // JavaScript 执行入口文件
  entry: './index.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[hash].bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  mode: 'production',
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
    },
    extensions: ['.tsx', '.ts', '.js', '.scss', '.json'],
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        use: [{ loader: 'happypack/loader?id=css' }],
      },
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        use: [{ loader: 'happypack/loader?id=tsx' }],
      },
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [{ loader: 'happypack/loader?id=babel' }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false,
            name: 'assets/image/[hash].[ext]',
            limit: 1024 * 20,
            fallback: 'file-loader',
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpack({
      title: 'webpack',
      filename: 'index.html',
      template: 'template.html',
    }),
    new DllReferencePlugin({
      manifest: require('./dist/react.manifest.json'),
    }),
    new DllReferencePlugin({
      manifest: require('./dist/polyfill.manifest.json'),
    }),
    new HappyPack({
      id: 'babel',
      loaders: [{
        loader: 'babel-loader',
        cache: true,
        query: {
          presets: ['@babel/preset-env'],
        },
      }],
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: 'css',
      loaders: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
      ],
    }),
    new HappyPack({
      id: 'tsx',
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
          },
        },
      ],
    }),
  ],
  devtool: 'hidden-source-map',
}

if (isDev) {
  config.devServer = {
    port: 9001,
    open: true,
    hot: true,
    openPage: './index.html',
    compress: true,
  }
  config.mode = 'development'
  config.stats = {
    errors: true,
    colors: true,
  }
  config.devtool = 'cheap-module-eval-source-map'
}

module.exports = config
