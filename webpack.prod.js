const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: "./"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            }
         ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style/[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
});