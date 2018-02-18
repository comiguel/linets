const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    use: [
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            minimize: true,
                            sourceMap: true
                        }
                    }, 'sass-loader']
                }),
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets/images', to:'assets/images' }
        ]),
        new CopyWebpackPlugin([
            { from: 'src/assets/fonts', to:'assets/fonts' }
        ]),
        new ExtractTextPlugin('assets/css/[name].css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
        new UglifyJsPlugin()
    ]
}