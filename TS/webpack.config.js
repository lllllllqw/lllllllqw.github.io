const path = require('path')
module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "app.min.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
        test: '/\.tsx?$/',
        loader:  [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  }
}