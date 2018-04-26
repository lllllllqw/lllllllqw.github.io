module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "app.min.js"
  },
  devtool: "source-map",
  resolve: {
    extensions:[".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: '/\.tsx?$/',
        loader: "ts-loader"
      },
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  }
}