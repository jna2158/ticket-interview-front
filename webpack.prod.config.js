const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require("dotenv");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.?(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          alias: {
            'jquery': path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js')
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images/'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
    new webpack.ProvidePlugin({
      process: "process/browser.js"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
