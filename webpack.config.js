const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rulesForJS = { 
    test: /\.js$/, 
    use: { loader: 'babel-loader' }
}

const rulesForCss = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

module.exports = {
        entry: './app.js',
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})],
        module: {
            rules: [rulesForJS, rulesForCss]
        },
        mode: 'development',
        devServer: {
            client: { progress: true, overlay : false },
            open: true,
            compress: true,
            server: 'http',
            static: { watch: true },
            hot: false,
            liveReload: true
        }
    }