const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
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
    }
}