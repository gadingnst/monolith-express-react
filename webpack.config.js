const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const templateContent = `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Sample App</title><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body><div id="app"></div></body>
</html>`

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader' },
      { test: /\.codegen$/i, loader: 'parcel-codegen-loader' }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      templateContent
    })
  ]
}