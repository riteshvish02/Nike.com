const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/script.js'),
        products: path.resolve(__dirname, '../src/javascripts/products.js'),
        about: path.resolve(__dirname, '../src/javascripts/about.js'),
        team: path.resolve(__dirname, '../src/javascripts/team.js'),
        career: path.resolve(__dirname, '../src/javascripts/career.js')
    },
    output: {
        hashFunction: 'xxhash64',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            filename: 'index.html',
            chunks: ['main'],
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/products.html'),
            filename: 'products.html',
            chunks: ['products'],
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/about.html'),
            filename: 'about.html',
            chunks: ['about'],
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/team.html'),
            filename: 'team.html',
            chunks: ['team'],
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/career.html'),
            filename: 'career.html',
            chunks: ['career'],
            minify: true
        }),
        new MiniCSSExtractPlugin()
    ],
    module: {
        rules: [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // CSS
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext]'
                }
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext]'
                }
            },

            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                type: 'asset/source',
                generator: {
                    filename: 'assets/shaders/[hash][ext]'
                }
            }
        ]
    }
};
