const path = require('path');
const webpack = require('webpack');

const config = {
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    // entry: ['babel-polyfill','application/renderers/dom.js'],
    entry: {
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom',
            'prop-types',
            'axios',
            'lodash.debounce',
            'lodash.pickby'
        ],
        app: ['application/renderers/dom.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','env','stage-2']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};

module.exports = config;