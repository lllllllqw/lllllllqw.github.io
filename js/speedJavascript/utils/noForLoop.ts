// 实现 reduce 函数
function reduce(callback: Function, initialValue) {
  const array = [...this]
  let index = 0
  while (array.length > 0) {
    const head = array.shift()
    initialValue = callback(initialValue, head, index++, this)
  }
  return initialValue
}

// 扁平化数组
function flatten(array: Array<any>) {
  return array.reduce((prev: Array<any>, next) => {
    if (Array.isArray(next)) {
      prev.push(...flatten(next))
    } else {
      prev.push(next)
    }
    return prev
  }, [])
}

// 将数组分为 pass / fail 两组
const partition = (arr: Array<any>, isValid: Function): Array<Array<any>> => {
  return arr.reduce(([pass, fail], next) => {
    return isValid(next) ? [[...pass, next], fail] : [pass, [next, ...fail]]
  }, [[], []])
}

// 使用 fn 混合两个数组
const mixWith = (fn: Function) => (part1: Array<any>) => (part2: Array<any>) => {
  if (!part1.length || !part2.length) {
    return [...part1, ...part2]
  }
  const [head1, ...tails1] = part1
  const [head2, ...tails2] = part2
  return [fn(head1)(head2), ...mixWith(fn)(tails1)(tails2)]
}

// 从左开始找出限定个数的复合要求的值
const takeLimitValid = <T>(array: Array<T>, isValid: Function, limit: number = Infinity): Array<T> => {
  if (limit === 0 || array.length === 0) {
    return []
  }
  const [head, ...tails] = array
  return isValid(head)
    ? [head, ...takeLimitValid(tails, isValid, limit - 1)]
    : takeLimitValid(tails, isValid, limit)
}
