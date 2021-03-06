const path = require('path');
const CopyPlugin  = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css/;

const setupDevtool = () => {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
};

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                loader: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'postcss-loader'
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                  name: "[name].[ext]"
                }
            },
            {
                test: /\.(png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CopyPlugin ({
            patterns: [
                { from: path.resolve(__dirname, './src/fonts'), to: path.resolve(__dirname, './dist/fonts') },
                { from: path.resolve(__dirname, './src/images'), to: path.resolve(__dirname, './dist/images') }
            ]
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV
    },
    devtool: setupDevtool()
};
