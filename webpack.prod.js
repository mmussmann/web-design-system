const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const FractalWebpackPlugin = require('fractal-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                        loader: "css-loader",
                        options: { importLoaders: 2 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [ 
                            	require('postcss-preset-env'),
								require('cssnano')
                            ],
                        }
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            }
        ],
    },
    plugins: [
      new FractalWebpackPlugin({
        mode: 'build',
        configPath: 'fractal.js'
      })
    ]
});