let superagent = require('superagent')
let cheerio = require('cheerio')

superagent.get('http://www.jianshu.com/')
  .end((err, res) => {
    if (err) {
      return console.log(err)
    }
    let $ = cheerio.load(res.text)
    // 拿到首页的文章
    let articles = $('#list-container .note-list li')
  })