class SensitiveFilter {
  sensitiveMap: any
  constructor() {
    this.sensitiveMap = new Map()
  }

  // 创建敏感词 map
  makeSensitiveMap(wordList) {
    const map = new Map()
    for (const word of wordList) {
      let m = map;
      for (const char of word) {
        // 如果没有有该字符的 key, 创建 key
        if (!m.get(char)) {
          const next = new Map()
          // 默认设置下一级为末尾
          next.set('laster', true)
          // 将本级设为末尾
          m.set('laster', false)
          m.set(char, next)
        }
        m = m.get(char)
      }
    }
    this.sensitiveMap = map
  }

  // 检查文字从某一索引起是否是敏感词
  checkSensitiveWord(text, index) {
    const {
      sensitiveMap
    } = this
    let word = ''
    let sensitive = false
    let m = sensitiveMap
    for (let i = index, length = text.length; i < length; i++) {
      const char = text[i]
      m = m.get(char)
      if (m) {
        word += char
        if (m.get('laster') === true) {
          sensitive = true
        }
      } else {
        break
      }
    }

    // 俩字成词, 意义何在
    // if(word.length < 2) {
    //   sensitive = false
    // }

    return {
      sensitive,
      word
    }
  }

  // 查找一段文字的所有敏感词
  filterSensitiveWord(text) {
    // 只取英文大小写,数字,以及中文
    const trimText = text.replace(/\u4e00-\u9fa5|a-z|A-Z|0-9/, '')
    // 逐个下标检查是否存在敏感词
    for (let i = 0, length = trimText.length; i < length; i++) {
      const res = this.checkSensitiveWord(trimText, i)
      if (res.sensitive) {
        // 仅仅是 console ,并未过滤
        // TODO: 如何实现过滤
        console.log('发现敏感词:', res.word)
      }
    }
  }
}


const sensitiveFilter = new SensitiveFilter()
sensitiveFilter.makeSensitiveMap(['沃日', '敲里吗'])
sensitiveFilter.filterSensitiveWord('我敲里吗!!!沃日')