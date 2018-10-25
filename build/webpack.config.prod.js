const path = require('path');
const webpack = require('webpack');
const webapckMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = webapckMerge(webpackBaseConfig, {
    entry: {
        'vue-rabbit': [path.join(__dirname, '../src/styles/index.less'), path.join(__dirname, '../src/index.ts')]
    },
    mode: 'production',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'vue-rabbit',
        umdNamedDefine: true
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs2: 'vue',
            commonjs: 'vue',
            amd: 'vue',
        },
        'vue-class-component': {
            root: 'Component',
            commonjs2: 'vue-class-component',
            commonjs: 'vue-class-component',
            amd: 'vue-class-component',
        },
        'vue-property-decorator': {
            root: 'vue-property-decorator',
            commonjs2: 'vue-property-decorator',
            commonjs: 'vue-property-decorator',
            amd: 'vue-property-decorator',
        }
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader'
                },
                {
                    loader: 'less-loader'
                }
            ]
        }]
    },
    plugins: [
        new cleanWebpackPlugin(
            path.join(__dirname, '../dist'), {
                root: path.join(__dirname, '..'),
                verbose: true,
                dry: false
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /vue-rabbit\.css/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                },
                parser: require('postcss-safe-parser'),
                autoprefixer: false
            },
            canPrint: true
        })
    ]
});
