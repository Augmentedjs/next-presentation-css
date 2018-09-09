const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  stats: "errors-only",
  devtool: "source-map",
  externals: {
    'chart.js': {
      commonjs: 'chart.js',
      commonjs2: 'chart.js',
      amd: 'chachart.jsrt',
      root: 'chart.js'
    },
    'augmentedjs-next-chart': {
      commonjs: 'augmentedjs-next-chart',
      commonjs2: 'augmentedjs-next-chart',
      amd: 'augmentedjs-next-chart',
      root: 'augmentedjs-next-chart'
    },
    'augmentedjs-next-presentation': {
      commonjs: 'augmentedjs-next-presentation',
      commonjs2: 'augmentedjs-next-presentation',
      amd: 'augmentedjs-next-presentation',
      root: 'Augmented'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      favicon: "./src/images/jobbit-head.png"
    })
  ]
};
