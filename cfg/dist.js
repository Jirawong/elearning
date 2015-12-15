var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./base');

var config = _.merge(
    {
        entry: path.join(__dirname, '../src/js/app'),
        cache: false,
        devtool: 'hidden-source-map',
        plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.NoErrorsPlugin(),
            new ExtractTextPlugin('style.css', {allChunks: true})
        ]
    },
    baseConfig
);

config.module.loaders.push(
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    },
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
    },
    {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: path.join(__dirname, '../src/js')
    }
);

module.exports = config;