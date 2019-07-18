const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const FractalWebpackPlugin = require('fractal-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
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
            options: { importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-pxtorem')({
                  propList: ['*']
                }),
                require('postcss-preset-env'),
                require('cssnano')
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new FractalWebpackPlugin({
      mode: 'build',
      configPath: 'fractal.js'
    }),
    // Additional files to be deployed in NPM package
    new CopyPlugin([
      { from: 'package.json', to: 'package.json' },
      { from: 'LICENSE', to: 'LICENSE', toType: 'file' },
      { from: 'README.md', to: 'README.md' },
      { from: 'src/scss/_variables.scss', to: 'scss/_variables.scss' },
      { from: 'src/scss/_bootstrap-export.scss', to: 'scss/_bootstrap-export.scss' }
    ])
  ]
})
