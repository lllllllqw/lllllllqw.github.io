function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function $watch (exp, fn) {
  let obj = data
  if(typeof exp === 'function') {
    exp()
  }
  const keys = exp.split('.')
  Target = fn
  keys.forEach(key => {
    obj = obj[key]
  })
}

const data = {
  a: 1,
  b: 2,
  obj: {
    sec: ''
  }
}

function walk(object) {
  if(!isObject(object)) return
  Object.keys(object).forEach(key => {
    let value = object[key]
    // dep 数组就是我们所谓的“筐”
    const dep = []
    Object.defineProperty(object, key, {
      set (newVal) {
        // 当属性被设置的时候，将“筐”里的依赖都执行一次
        if(value === newVal) return
        object[key] = value = newVal
        dep.forEach(fn => fn())
      },
      get () {
        // 当属性被获取的时候，把依赖放到“筐”里
        dep.push(Target)
        return value
      }
    })
    if(isObject(value)) {
      walk(value)
    }
  })
}

walk(data)

let Target = null

function render() {
  console.log(data.a, data.b)
}

$watch(render, render)

