var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./base');

var config = _.merge(
    {
        entry: [
            'webpack-dev-server/client?http://172.16.0.60:8000',
            'webpack/hot/only-dev-server',
            './src/js/app'
        ],
        cache: true,
        devtool: 'eval',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
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
    }
);

module.exports = config;