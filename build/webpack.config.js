const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
                            formattersDirectory: 'node_modules/tslint-formatter-beauty',
                            formatter: 'beauty'
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                    }
                ]
            },
            {
                 test: /\.vue|js$/,
                 enforce: 'pre',
                 exclude: /node_modules/,
                 use: [{
                     loader: 'eslint-loader',
                     options: {
                         formatter: require('eslint-friendly-formatter')
                     }
                 }]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new StyleLintPlugin({
            context: path.join(__dirname, '../src'),
            files: ['styles/*.less', 'styles/*/*.less'],
            syntax: 'less'
        })
    ]
}
