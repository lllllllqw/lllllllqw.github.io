module.exports = {
  lintOnSave: false,
  devServer: {
    port: 5793,
    proxy: {
      '/mock': {
        target: 'https://www.easy-mock.com/mock/5aa8cfbded660354c1456a39',
        pathRewrite: {"^/mock" : ""}
      }
    }
  }
}