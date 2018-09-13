const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        login: './src/pages/login/login.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static/')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    "postcss-loader",
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['static']),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};
