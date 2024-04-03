const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

// TODO: Донастроить HMR для CSS в development окружении
const config = {
    mode: process.env.NODE_ENV,
    entry: {
        index: './src/index.jsx',
        converter: './src/hacks/converter.js',
        redirector: './src/hacks/redirector.js',
        vendor: [
            'react',
            'react-dom',
            'react-router-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../'),
        filename: '[name].js'
    },
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        publicPath: '/images/'
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    test: path.resolve(__dirname, 'node_modules'),
                    name: 'vendor',
                    enforce: true
                }
            }
        },
        minimize: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: false,
            minify: {
                collapseWhitespace: true,
                processConditionalComments: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: './src/html/404.html',
            inject: false,
            minify: {
                collapseWhitespace: true,
                processConditionalComments: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    performance: {
        maxAssetSize: 300000
    }
};

if (isDevelopment) {
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config;
