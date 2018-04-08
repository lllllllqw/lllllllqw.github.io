/**
 * @description 生成一个区间内的整数
 * @param  {Number} start 开始数字
 * @param  {Number} end 结束数字
 * @param  {[Number]} notCreate 不希望出现的数字
 */
export function randomNum(start, end, notCreate) {
  let num = Math.floor(Math.random() * (end - start + 1) + start)
  const isNotCreate = notCreate.findIndex(val => num === val) !== -1
  num = isNotCreate ? randomNum(start, end, notCreate) : num
  return num
}

export function isLeapYear(year) {
  return (year % 100 === 0 ? (year % 400 === 0 ? 1 : 0) : (year % 4 === 0 ? 1 : 0))
}

// 某一日的model
// {
//   year: Number(1970 - 8888),
//   // 属于的月
//   month: Number(0 - 11),
//   // 日
//   date: Number(1 - 31),
//   // 周几
//   day: Number(0 - 6),
//   // 是否被选中
//   isSelected: Boolean(true / false)
// }

export function generateDateModel(year, month, date, extra) {
  // 创建当前时间
  const dateObj = new Date(
    `${year}-${(month + 1) > 9 ? (month + 1) : `0${(month + 1)}`}-${date > 9 ? date : `0${date}`}T00:00:00`)
  let model = {
    year,
    month,
    date,
    day: dateObj.getDay(),
    timestamp: +dateObj
  }
  // 添加extra内容
  if (extra) {
    model = Object.assign(model, extra)
  }
  return model
}

// 使用ES6参数默认值实现必要参数
const require = () => {
  throw new Error('缺少参数')
}

export function requireParameter(param = require()) {
  return param
}

export default {
  randomNum,
  isLeapYear
}
