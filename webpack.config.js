const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: './src/index.ts',
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
            template: './index.html',
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
        ],
      },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}