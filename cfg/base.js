var path = require('path');

var port = 8000;
var srcPath = path.join(__dirname, '../src/js');
var publicPath = '/assets/';

module.exports = {
    port: port,
    debug: true,
    output: {
        path: path.join(__dirname, '../src/main/webapp/assets'),
        filename: 'app.js',
        publicPath: publicPath
    },
    devServer: {
        contentBase: './src/js',
        historyApiFallback: true,
        hot: true,
        port: port,
        publicPath: publicPath,
        noInfo: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.css','.scss'],
        alias: {
            components: srcPath + '/components/',
            styles: srcPath + '/styles/'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                include: srcPath,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|eot|eot\?v=4.5.0|woff\?v=4.5.0|woff2\?v=4.5.0|ttf\?v=4.5.0|svg\?v=4.5.0)$/,
                loader: 'url-loader'
            }
        ]
    }
};