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
    main: path.resolve('./src/js/main.js'),
    "design-system": path.resolve('./src/js/design-system.js'),
    "rich-icons-bundle": path.resolve('./src/js/rich-icons-bundle.js')
    
  },
  output: {
    path: path.resolve('./public/'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin({ 
      cleanAfterEveryBuildPatterns: ['!theme-overrides/**/*', '!src/**/*']
    }),
    new StyleLintPlugin({
      files: '{components,src}/**/*.{scss,css}',
      fix: true
    }),
    new MiniCssExtractPlugin(),
    new SVGSpritemapPlugin('src/svg/flat/**/*.svg', {
      output: {
         filename: 'msds-spritemap.svg',
         svgo: {
          plugins: [
            { removeTitle: true },
            { removeUselessStrokeAndFill: true }
          ]
        },
        svg: {
          sizes: false
        }
      },
      sprite: {
        prefix: false,
      }
    }),
    new SVGSpritemapPlugin('src/svg/rich/**/*.svg', {
      output: {
        filename: 'rich-icon-spritemap-build-only.svg',
        svgo: {
          plugins: [
            { cleanupAttrs: true },
            { inlineStyles: false },
            { removeDoctype: true },
            { removeXMLProcInst: true },
            { removeComments: true },
            { removeMetadata: true },
            { removeTitle: true },
            { removeDesc: true },
            { removeUselessDefs: true },
            { removeXMLNS: false },
            { removeEditorsNSData: true },
            { removeEmptyAttrs: true },
            { removeHiddenElems: true },
            { removeEmptyText: true },
            { removeEmptyContainers: true },
            { removeViewBox: true },
            { cleanupEnableBackground: true },
            { minifyStyles: false },
            { convertStyleToAttrs: true },
            { convertColors: true },
            { convertPathData: true },
            { convertTransform: true },
            { removeUnknownsAndDefaults: true },
            { removeNonInheritableGroupAttrs: true },
            { removeUselessStrokeAndFill: true },
            { removeUnusedNS: true },
            { prefixIds: false },
            { cleanupIDs: false },
            { cleanupNumericValues: true },
            { cleanupListOfValues: false },
            { moveElemsAttrsToGroup: true },
            { moveGroupAttrsToElems: true },
            { collapseGroups: true },
            { removeRasterImages: false },
            { mergePaths: false },
            { convertShapeToPath: true },
            { convertEllipseToCircle: true },
            { sortAttrs: false },
            { sortDefsChildren: true },
            { removeDimensions: false },
            { removeAttrs: false },
            { removeAttributesBySelector: false },
            { removeElementsByAttr: false },
            { addClassesToSVGElement: false },
            { addAttributesToSVGElement: false },
            { removeOffCanvasPaths: false },
            { removeStyleElement: false },
            { removeScriptElement: false },
            { reusePaths: false }
          ]
        },
        svg: {
          sizes: false
        }
      },
      sprite: {
        prefix: false,
      },
      styles: { 
        format: 'data',
        filename: path.join(__dirname, 'src/scss/rich-icons.scss'),
        variables : { 
          sizes: 'sprite-sizes'
        }
      }
    }),
    new CopyPlugin([
      { from: 'theme-overrides/styles.css', to: 'theme-overrides/styles.css' },
      { from: 'src/demo-img', to: 'src/demo-img' },
      { from: 'src/svg/flat/right-arrow.svg', to: 'src/demo-img' }
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
          presets: [['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3 }]]
        }
      }
    ]
  }
}
