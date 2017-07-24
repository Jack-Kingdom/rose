/**
 * Created by Jack on 4/12/2017.
 */


import path from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import config from '../backend/config'

let webpackConfig = {
    entry: {
        home: './src/frontend/entry.js',
    },
    output: {
        path: path.join(config.appRoot, 'build/frontend'),
        filename: "js/[name].js"
    },
    devServer: {
        port: 8080,
        hot: true,
        inline: true,
        stats: {colors: true},
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'styles-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                // loader:  "styles-loader!css-loader!less-loader"
                loader: ExtractTextPlugin.extract({
                    fallback: 'styles-loader',
                    use: "css-loader!less-loader",
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[ext]'
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
        'react-router-dom': 'ReactRouterDOM',
        'medium-editor': 'MediumEditor',
        'radium': 'Radium',
        'katex': 'Katex',
    },
    plugins: [

        // home page
        new HtmlWebpackPlugin({
            template: 'src/frontend/index.html',
            filename: 'index.html',
        }),

        // combine css file
        new ExtractTextPlugin("css/[name].css"),
    ]
};

// minimize and compress javascript
if (!config.debug) webpackConfig.plugins.push(new UglifyJSPlugin());

if (config.debug) {
    const options = {
        proxy: {"**": "http://localhost:" + config.port},
    };
    const server = new WebpackDevServer(webpack(webpackConfig), options);
    server.listen(webpackConfig.devServer.port, 'localhost', (err) => {
        if (err) throw err;
    })

} else {
    webpack(webpackConfig, (err, stats) => {
        if (err) throw err;
        console.log(stats.toString());
    });
}