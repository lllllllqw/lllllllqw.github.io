// 数字格式化 1234567890 --》 1,234,567,890
// 中心思想：倒着数

// 普通版
function formatNumberNormal(str) {
  let arr = []
  let count = str.length
  // 如果长度足够，在数组顶部放入
  while (count >= 3) {
    arr.unshift(str.slice(count - 3, count))
    count -= 3
  }
  // 最后count不为0时，在顶部放入剩下的
  count && arr.unshift(str.slice(0, count))

  return arr.toString()
}

// 进阶版
function formatNumberAdvance(str) {
  // 先转换为数组，反转，然后累加放最后
  return str.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : `${next},`) + prev
  })
}

// *正则版
// 还没看懂
function formatNumberReg(str) {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// API版本
// 前面弄这么久，结果有API？？？？
function formatNumberAPI(str) {
  return parseInt(str).toLocaleString('en-US')
}

console.log(formatNumberAPI('1234567890'))
console.log(formatNumberAPI('123'))
console.log(formatNumberAPI('12'))