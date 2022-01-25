const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
        fallback: {
            path: require.resolve('path-browserify'),
            fs: false,
        },
    },
    devServer: {
        static: './build',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html'),
        }),
    ],
};
