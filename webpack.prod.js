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
                require('cssnano')({
                  preset: ['default', {
                    svgo: false
                }]
                })
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
      { from: '.npmignore', to: '.npmignore', toType: 'file' },
      { from: 'components/icons/icons.list.js', to: 'icons.list.js'},
      { from: 'components/typography/text.list.js', to: 'text.list.js'},
      { from: 'components/colors/colors.list.js', to: 'colors.list.js'}
    ])
  ]
})
