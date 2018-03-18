// 全忘了,从零开始正则表达式

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

console.log(findFirstStr('332', '1233241a'))