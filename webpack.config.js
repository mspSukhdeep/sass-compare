const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

let fs = require('fs');

const header = fs.readFileSync(__dirname + '/src/ui/header.html');
const footer = fs.readFileSync(__dirname + '/src/ui/footer.html');

module.exports = {

    entry: './src/main.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'js/main.bundle.js'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader', 'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css?v=[chunkhash]",
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            },
            files: ['./dist/*', '**/*.html']
        }),
        new HtmlWebpackPlugin({
            title: 'Home Page',
            template: 'src/index.html',
            filename: 'index.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'List Page',
            template: 'src/list.html',
            filename: 'list.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Single Page',
            template: 'src/single-reviews.html',
            filename: 'single-reviews.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Single Page',
            template: 'src/single-profile.html',
            filename: 'single-profile.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Single Page | Alternatives',
            template: 'src/single-alternatives.html',
            filename: 'single-alternatives.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Single Page',
            template: 'src/single-pricing.html',
            filename: 'single-pricing.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'All Components Page',
            template: 'src/all.html',
            filename: 'all.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Review Page',
            template: 'src/review.html',
            filename: 'review.html',
            header: header,
            footer: footer
        })
    ],
    watch: true,
    devtool: 'source-map'
}