var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['webpack-hot-middleware/client', path.join(__dirname, 'src/client/index')],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders:[{
            test: /\.jsx?$/,
            loader: 'babel',
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};