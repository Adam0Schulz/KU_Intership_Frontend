const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: './src/pages/homePage/index.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        proxy: {
            '/api': {
                target: 'https://cms.ku.dk',
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                    '^/api': '/menu-spippets/eng-global-footer.html',
                }
            }
        }
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/homePage/index.html',
            filename: 'index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}