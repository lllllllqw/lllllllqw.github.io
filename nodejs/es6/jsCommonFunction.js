// 数组扁平化: 把数组拆成一维
// 普通递归
function arrayFlatten(arr) {
  let result = []
  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(...arrayFlatten(i))
    } else {
      result.push(i)
    }
  }
  return result
}

// TEST
// console.log(arrayFlatten([1, [1,2,3, ['b', ['dfs']]]]))

// reduce递归(好像还没普通循环简洁,理解一下reduce的用法)
function arrayFlattenOther(arr) {
  return arr.reduce((prev, next) => {
    if (Array.isArray(next)) {
      prev.push(...arrayFlattenOther(next))
    } else {
      prev.push(next)
    }
    return prev
  }, [])
}
// TEST
// console.log(arrayFlattenOther([1, [1,2,3, ['b', ['dfs']]]]))

// 柯里化: 参数够了就执行,不够就存起参数,返回一个function继续调用,直到参数足够
function curry(func) {
  let l = func.length
  return function curried() {
    let args = Array.from(arguments)
    if (args.length < l) {
      return function () {
        let moreArgs = Array.from(arguments)
        return curried.apply(this, [...args, ...moreArgs])
      }
    } else {
      return func.apply(this, args)
    }
  }
}

// TEST
// let f = function(a, b, c) {
//   return console.log([a, b, c])
// }
// let curried = curry(f)
// curried(1)(2)(3)

// 防抖: 不管调用多少次,只能在最后触发后经过设定的时间才能再次触发
function debounce(func, wait) {
  let timer = 0
  return function() {
    let args = Array.from(arguments)
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

// TEST
// let f = function (a, b, c) {
//   return console.log([a, b, c])
// }
// let debounced = debounce(f, 100)
// debounced(0, 0)
// setTimeout(() => {
//   debounced(80, 80)
// }, 80)
// setTimeout(() => {
//   debounced(190, 190)
// }, 190)
// setTimeout(() => {
//   debounced(280, 280)
// }, 280)
// setTimeout(() => {
//   debounced(290, 290)
// }, 290)

// 节流: 无论调用多少次,最快的出发间隔也只能是设定的时间
function throttle(func, wait) {
  let last = 0
  return function () {
    let now = +new Date()
    if (now - last > wait) {
      last = now
      return func.apply(this, Array.from(arguments))
    } else {
      return false
    }
  }
}

// TEST
// let f = function (a, b, c) {
//   return console.log([a, b, c])
// }
// let throttled = throttle(f, 800)
// throttled(0, 0)
// setTimeout(() => {
//   throttled(400, 400)
// }, 400)
// setTimeout(() => {
//   throttled(880, 880)
// }, 880)
// setTimeout(() => {
//   throttled(1500, 1500)
// }, 1500)
// setTimeout(() => {
//   throttled(2100, 2100)
// }, 2100)