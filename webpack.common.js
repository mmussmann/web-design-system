const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        filename: '[name].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};