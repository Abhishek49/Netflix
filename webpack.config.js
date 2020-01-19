const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry:'./src/index.js',
    mode: 'development',
    output:{
        path:path.resolve(__dirname, "public","dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.js.*$/,
                include:[path.resolve(__dirname, "src")],
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
          },
        ]
    },
    devServer: {
            contentBase: path.resolve(__dirname, "public", "dist"),
            hot: true,
            port: 3000,
            historyApiFallback: true
    },
    plugins: [
        new htmlWebpackPlugin({template:path.resolve(__dirname, 'index.html')}),
        new webpack.HotModuleReplacementPlugin()
    ]
}
