const superagent = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs')

function replaceText(text) {
  return text.replace(/\n/g, "").replace(/\s/g, "");
}

function findText(_this, selector, extra) {
  if (extra) {
    return replaceText(_this.find(selector)[extra]().text())
  }
  return replaceText(_this.find(selector).text())
}

superagent.get('http://www.jianshu.com/')
.end((err, res) => {
  if (err) {
    return console.log(err)
  }
    let data = []
    let $ = cheerio.load(res.text)
    // 拿到首页的文章
    let articles = $('#list-container .note-list li')
    articles.each((index, element) => {
      let _this = $(element)
      data.push({
        id: _this.attr('data-note-id'),
        slug: _this.find('.title').attr('href').replace(/\/p\//, ""),
        author: {
          slug: _this.find('.avatar').attr('href').replace(/\/u\//, ""),
          avatar: _this.find('.avatar img').attr('src'),
          nickname: findText(_this, '.blue-link'),
          sharedTime: _this.find('.time').attr('data-shared-at')
        },
        title: findText(_this, '.title'),
        abstract: findText(_this, '.abstract'),
        thumbnails: _this.find('.wrap-img img').attr('src'),
        collection_tag: findText(_this, '.collection-tag'),
        reads_count: +findText(_this, '.ic-list-read', 'parent'),
        comments_count: +findText(_this, '.ic-list-comments', 'parent'),
        likes_count: +findText(_this, '.ic-list-like', 'parent')
      })
    })
    fs.writeFile(__dirname + `/jianshu/articles_${+new Date()}.json`, JSON.stringify({
      status: 0,
      data
    }),function(err) {
      if(err) {
        return console.log(err)
      }
      console.log('抓取完成')
    })
  })