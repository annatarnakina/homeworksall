const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        },
        {
        test: /\.(sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
        test: /\.(eot|jpg|jpeg|png|svg)$/,
        type: 'asset/resource',
        },
    ],
    },
    resolve: {
    extensions: ['.js'],
    },
    resolveLoader: {
    modules: [
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(__dirname, 'node_modules'),
    ],
    },
    plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(process.cwd(), './public/index.html'),
    }),
    ],
    output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'build'),
    },
};
