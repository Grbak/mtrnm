const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

console.log(process.env.NODE_ENV);

module.exports = {
    context: path.resolve(__dirname, './src'),
    mode: 'development',
    entry: './index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            global: path.resolve(__dirname, './src/global'),
            local: path.resolve(__dirname, './src/local'),
            assets: path.resolve(__dirname, './src/assets')
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new ESLintPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts?x$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader'
            }
        ]
    }
};
