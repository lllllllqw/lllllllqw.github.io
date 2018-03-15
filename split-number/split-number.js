/**
 * @method splitNumber
 * @param {Number} number 显示的数字
 * @param {Number} maxBits 最大显示个数(计算负号，小数点)
 * @param {Element} node 插入的节点
*/
function splitNumber(number, maxBits, node) {
  str = number.toString()
  let splitArr = str.split('')
  if(splitArr.length > 8) {
    console.warn('不能超过约定的最大位数')
  } else {
    for(; splitArr.length < 8;) {
      if(number > 0){
        splitArr.unshift('0')
      }else {
        splitArr.push('0')
      }
    }
    for(let val of splitArr) {
      let strNode = document.createElement('span')
      strNode.className = 'split-number-str'
      strNode.innerHTML = val
      node.appendChild(strNode)
    }
  }
}

splitNumber(231.57, 6, document.body)