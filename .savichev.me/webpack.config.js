const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const debug = process.env.NODE_ENV === 'development';


module.exports = function() {
    const plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')()
                ]
            }
        }),
        new ExtractTextPlugin({
            filename: 'styles.css'
        })
    ];

    if (!debug) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                inject: false,
                minify: {
                    collapseWhitespace: true,
                    processConditionalComments: true
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                comments: false
            })
        )
    }

    return {
        context: __dirname,
        entry:  './src/app.jsx',
        output:  {
            path: path.join(__dirname, '../'),
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.styl'],
            modules: [
                './node_modules'
            ]
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.jsx$/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                },
                {
                    test: /\.styl$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: !debug
                                }
                            },
                            'postcss-loader',
                            'stylus-loader'
                        ]
                    })
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'images/',
                            outputPath: 'images/'
                        }
                   }
                }
            ]
        },
        plugins: plugins
    };
};
