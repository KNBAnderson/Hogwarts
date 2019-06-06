const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist')
  },
  plugins: [
    new Dotenv(),
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'JestRig',
      template: './src/index.html',
      inject: true
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|eot|svg|ttf|woff|jpg|png)$/i, 
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                    },
  
                  },
                ],
              },
  
      {
        test: /\.js$/,
        exclude: [/node_modules/,/spec/],
        loader: "eslint-loader"
      },
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // watchContentBase: true,
    open: 'Google Chrome'
  }
};