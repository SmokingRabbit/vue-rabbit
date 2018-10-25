const path = require('path');
const webpack = require('webpack');
const webapckMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = webapckMerge(webpackBaseConfig, {
    entry: {
        app: [path.join(__dirname, '../examples/index.js')],
        vender: ['vue', 'vue-router', 'vue-property-decorator', 'vue-class-component']
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'static/js/[name].[hash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../examples/index.html'),
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new FriendlyErrorsPlugin()
    ],
    optimization: {
        splitChunks: {
            name: 'vender'
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../'),
        host: 'localhost',
        port: process.env.PORT || 8099,
        open: true,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    devtool: 'source-map'
});
