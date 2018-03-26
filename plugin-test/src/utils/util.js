/**
 * @description 生成一个区间内的整数
 * @param  {Number} start 开始数字
 * @param  {Number} end 结束数字
 * @param  {[Number]} notCreate 不希望出现的数字
 */
function randomNum(start, end, notCreate) {
  let num = Math.floor(Math.random()*(end - start + 1) + start)
  let isNotCreate = notCreate.findIndex(val => num === val) !== -1
  num = isNotCreate ? randomNum(start, end, notCreate) : num
  return num
}

for(let i = 0; i< 10; i++) {
console.log(randomNum(1, 5, [3,4]))
}

module.exports = {
  randomNum
}