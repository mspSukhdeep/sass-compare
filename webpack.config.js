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
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                // 'style-loader',
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
            title: 'Tool Page',
            template: 'src/tool.html',
            filename: 'tool.html',
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
            title: 'Single Page | Reviews',
            template: 'src/single-reviews.html',
            filename: 'single-reviews.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Single Page | Profile',
            template: 'src/single-profile.html',
            filename: 'single-profile.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Single Page | Features',
            template: 'src/single-features.html',
            filename: 'single-features.html',
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
            title: 'Single Page | Pricing',
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
        }),
        new HtmlWebpackPlugin({
            title: 'About Us Page',
            template: 'src/about.html',
            filename: 'about.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Meet Our Team Page',
            template: 'src/team.html',
            filename: 'team.html',
            header: header,
            footer: footer
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Us Page',
            template: 'src/contact.html',
            filename: 'contact.html',
            header: header,
            footer: footer
        })
    ],
    watch: true,
    devtool: 'source-map'
}