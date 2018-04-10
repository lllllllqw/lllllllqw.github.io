const path = require('path')
module.exports = {
  // 模式为开发模式
  mode: 'development',
  // 输出位置为/dist/
  output: {
    publicPath: '/dist/'
  },
  // loader
  module: {
    rules: [{
      // 使用babel-loader加载js
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }, {
      // 使用url-loader加载图片
      test: /\.(png|jpg|git)$/,
      use: [{
        loader: 'url-loader'
      }]
    }]
  }
}