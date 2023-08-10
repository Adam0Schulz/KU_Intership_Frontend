const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: {
        home: './src/pages/homePage/index.ts',
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
        historyApiFallback: {
            rewrites: [
                { from: /^\/home$/, to: '/home.html' },
                { from: /^\/$/, to: '/home.html' },
                { from: /^\/about$/, to: '/about.html' },
                { from: /./, to: '/404.html' } // Redirects unmatched paths to a 404 page
            ]
        },
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
            filename: 'home.html',
            chunks: ['home']
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
        extensions: ['.tsx', '.ts', '.js']
    }
}