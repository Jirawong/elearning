var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./base');

var config = _.merge(
    {
        entry: [
            'webpack-dev-server/client?http://127.0.0.1:8000',
            'webpack/hot/only-dev-server',
            './src/js/app'
        ],
        cache: true,
        devtool: 'eval',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    baseConfig
);

config.module.loaders.push(
    {
        test: /\.css$/,
        loader: 'style!css?sourceMap'
    },
    {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap'
    },
    {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel-loader',
        include: path.join(__dirname, '../src/js')
    },
    {
        test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|eot|eot\?v=4.5.0|woff\?v=4.5.0|woff2\?v=4.5.0|ttf\?v=4.5.0|svg\?v=4.5.0)$/,
        loader: 'url-loader'
    }
);

module.exports = config;
