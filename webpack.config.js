const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: {
        index: './src/pages/homePage/index.ts',
        about: './src/pages/aboutPage/index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        proxy: {
            '/ku': {
                target: 'https://cms.ku.dk',
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                    '^/ku/footer': '/menu-spippets/global-footer.html',
                    '^/ku/header': '/menu-spippets/global-topmenu.html',
                    '^/ku/top2menu': '/menu-spippets/global-second-level-menu.html'
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
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/aboutPage/index.html',
            filename: 'about.html',
            chunks: ['about']
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
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@js': path.resolve(__dirname, './src/js'),
            '@gcss': path.resolve(__dirname, './src/global.css'),
            '@assets': path.resolve(__dirname, './src/assets')
        },
    }
}