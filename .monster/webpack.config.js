const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { EnvironmentPlugin } = require('webpack');

module.exports = (env, args) => {
    const environment = require(`../src/environments/${env.environment}.json`);
    return {
        mode: environment.MODE || 'development',
        entry: './src/index.ts',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, '../dist'),
        },
        devServer: {
            static: './src',
            host: 'localhost',
            historyApiFallback: {
                index: 'index.html'
            }
        },
        plugins: [
            new EnvironmentPlugin(environment),
            new CopyPlugin({
                patterns: [
                    { from: "src/index.html", to: "" },
                    { from: "src/assets", to: "assets" }
                ],
            })
        ],
        module: {
            rules: [
                {
                    test: /(\.css|\.scss)$/i,
                    use: ['@monster-js/transformer/css', 'style-loader', 'css-loader', 'sass-loader'],
                    include: [path.resolve(__dirname, '../src')],
                    exclude: [path.resolve(__dirname, '../src/assets')]
                },
                {
                    test: /\.(ts|tsx)$/i,
                    exclude: ['/node_modules/'],
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|jpeg|ico)$/i,
                    type: 'asset',
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: 'source-map'
    }
};
