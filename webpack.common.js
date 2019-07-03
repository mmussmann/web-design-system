const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

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
    new CleanWebpackPlugin(),
    new StyleLintPlugin({
      files: '{components,src}/**/*.{scss,css}'
    }),
    new MiniCssExtractPlugin(),
    new SVGSpritemapPlugin('src/svg/**/*.svg', {
      output: {
        filename: 'msds-spritemap.svg'
      },
      sprite: {
        prefix: false
      }
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
