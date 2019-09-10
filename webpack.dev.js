const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const FractalWebpackPlugin = require('fractal-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-pxtorem')({
                  propList: ['*']
                }),
                require('postcss-preset-env')
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new FractalWebpackPlugin({
      mode: 'server',
      configPath: 'fractal.js'
    }),
    new CopyPlugin([{ from: 'src/demo-img', to: 'src/demo-img' }])
  ]
})
