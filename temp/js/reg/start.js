// 全忘了,从零开始正则表达式
// 参照:http://www.jb51.net/article/77687.htm

const log = console.log.bind(console)

// 判读是否全是数字
function isAllNumber(str) {
  // \D匹配数字字符
  // var reg = /\d/
  // 0-9匹配0到9
  var reg = /\d/
  return !reg.test(str)
}

// 寻找str中param的索引
function findFirstStr(str, param) {
  var reg = new RegExp(str)
  return param.search(reg)
}

const numberReg = {
  findLengthN: function(n) {
    // /^\d{n}$/
    // 匹配长度为n的字符串
    return new RegExp(`^\\d{${n}}$`)
  },
  findLessLengthN: function(n) {
    // /^\d{n,}$/
    // 匹配长度至少为n的字符串
    return new RegExp(`^\\d{${n},}$`)
  },
  findLengthMtoN: function(m, n) {
    // /^\d{m,n}$/
    // 匹配长度至少为m到n的字符串
    return new RegExp(`^\\d{${m},${n}}$`)
  },
  find0Or1First: function() {
    // 找到0跟1开头的数字
  }
}

// log(numberReg.findBinary().test('13423'))
// log(numberReg.findBinary().test('0111'))
// log(numberReg.findBinary().test(''))