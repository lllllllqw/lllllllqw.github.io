// 将多个参数的函数改为单个单个参数调用
const curry = (fn, _this = null) => {
  if (typeof curry !== 'function') {
    throw new Error('必须传入一个函数!')
  }
  return function curriedFn (...args) {
    args
    if(fn.length !== arguments.length) {
      return function () {
        return curriedFn.call(null, ...[...arguments, ...args])
      }
    }
    return fn.call(_this, ...args)
  }
}

function add(x, y) {
  return x + y
}

// example
const curriedAdd = curry(add)
const a = curriedAdd(1)
const b = a(2)

// 偏应用
const partial = (fn, ...partialArgs) => {
  return (...otherArgs) => {
    partialArgs.forEach((arg, i) => {
      if(arg === undefined) {
        // FIXME: 此处第二次调用由于 undefined 已经被填充,所以仍是第一次的结果
        partialArgs[i] = otherArgs.pop()
      }
    })
    return fn.call(null, ...partialArgs)
  }
}

// example
const oneSecondTimeout = partial(setTimeout, undefined, 1000)
console.time('t')
oneSecondTimeout(() => console.timeEnd('t'))

