/**
 * Created by Jack on 4/12/2017.
 */


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const config = require('./src/backend/config');
module.exports = {
    entry: {
        home: './src/frontend/home/entry.js',
        admin: './src/frontend/admin/entry.js'
    },
    output: {
        path: path.join(__dirname, 'build/frontend'),
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom':'ReactRouterDOM',
    },
    plugins: [
        // home page
        new HtmlWebpackPlugin({
            template: 'src/frontend/home/index.html',
            chunks: ['home'],
            filename:'home.html',
            debug:config.debug,
        }),
        // admin page
        new HtmlWebpackPlugin({
            template: 'src/frontend/admin/index.html',
            chunks: ['admin'],
            filename: 'admin.html',
            debug:config.debug,
        }),
        // minimize and compress javascript
        new UglifyJSPlugin()
    ]
};