/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Config directories
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = [SRC_DIR];

module.exports = {
  externals: {},
  entry: ["@babel/polyfill", SRC_DIR + '/index.js'],
  output: {
    path: OUTPUT_DIR,
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[hash:base64:5]',
                minimize: {
                  discardComments: {
                    removeAll: true,
                  },
                },
              }
            }
          ],
        }),
        include: defaultInclude
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[hash:base64:5]',
                minimize: {
                  discardComments: {
                    removeAll: true,
                  },
                },
              }
            },
            {
              loader: 'sass-loader'
            }
          ],
        })
      },
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        include: defaultInclude
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude
      }
    ]
  },
  target: 'electron-renderer',
  plugins: [
    new CopyWebpackPlugin([
      { from: 'package.json', to: './' },
      { from: 'main.js', to: './' }
    ]),
    new HtmlWebpackPlugin({
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
      },
      filename: 'index.html',
      template: `${__dirname}/index.html`
    }),
    new ExtractTextPlugin('style-[contenthash:8].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BabiliPlugin()
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false
  }
};
