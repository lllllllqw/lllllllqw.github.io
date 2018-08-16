// 使用 reduce 定义 map 与 filter
// const map = (fn: Function, arr: Array<any>) => 
//   arr.reduce((prev: Array<any>, next) => (prev.push(fn(next)), prev), [])

// const filter = (fn: Function, arr: Array<any>) =>
//   arr.reduce((prev: Array<any>, next) => (fn(next) && prev.push(next), prev), [])

// const b = filter(e => e > 5, [2, 55, 6, 3])

// 实现管道处理
const pipe =
  (...fns: Array<Function>) =>
    (reducer: Function) =>
      fns.reduce((fx, fy) => fy(fx), reducer);

const map = (fn: Function) =>
  (reducer: Function) =>
    (res: Array<any>, next) =>
      reducer(res, fn(next))

const filter =
  (fn: Function) =>
    (reducer: Function) =>
      (res: Array<any>, next) => {
        // 如果 fn 方法返回 true, 执行 reducer, 否则跳过 reducer
        if (fn(next)) {
          return reducer(res, next)
        }
        return res
      }

const replaceATypeToOneHundred =
  (fn: Function) =>
    (reducer: Function) =>
      (res: Array<any>, next) => {
        if(fn(next)) {
          return reducer(res, 100)
        }
        return reducer(res, next)
      }

const pushReducer =
  (res, next) =>
    (res.push(next), res)

const arr = ['2', 55, 6, 3]

// const result = arr.reduce(map(e => e / 10)(filter(e => e > 5)(pushReducer)), [])

// pipe 从下至上执行是否不太合理
const result = arr.reduce(
  pipe(
    map(e => e / 10),
    filter(e => e > 5),
    replaceATypeToOneHundred(e => typeof e === 'string')
  )(pushReducer),
  []
)

console.log(result)