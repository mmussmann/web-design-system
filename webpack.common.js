const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, './components'),
      scss: path.resolve(__dirname, './src/scss')
    }
  },
  entry: {
    main: path.resolve('./src/js/main.js')
  },
  output: {
    path: path.resolve('./public/'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['!theme-overrides/*'],
    }),
    new StyleLintPlugin({
      files: '{components,src}/**/*.{scss,css}',
      fix: true
    }),
    new MiniCssExtractPlugin(),
    new SVGSpritemapPlugin('src/svg/**/*.svg', {
      output: {
        filename: 'msds-spritemap.svg'
      },
      sprite: {
        prefix: false
      }
    }),
    new CopyPlugin([
      { from: 'theme-overrides/styles.css', to: 'theme-overrides/styles.css' }
    ])
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
          {
            loader: 'prettier-loader',
            options: {
              parser: 'babel'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}
