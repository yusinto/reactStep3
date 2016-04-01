var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [path.join(__dirname, 'src/client/index')],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders:[{
            test: /\.jsx?$/,
            loader: 'babel',
            include: path.join(__dirname, 'src')
        }]
    }
};