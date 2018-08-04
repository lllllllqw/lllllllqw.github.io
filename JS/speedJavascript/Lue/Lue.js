function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function isArray(val) {
  return Object.prototype.toString.call(val) === '[object Array]'
}

// 用于在对象上定义一个可选枚举/不可枚举的属性
function defObserverEnumerable(object, key, value, enumerable = false) {
  Object.defineProperty(object, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}

// 框子
class Dep {
  constructor() {
    this.subs = []
  }

  notify() {
    console.log('数据更新了')
  }

  addSub(fn) {
    this.subs.push(fn)
  }

  removeSub(fn) {
    this.subs.splice(this.subs, this.subs.findIndex(e => e === fn), 1)
  }
}

class Observer {
  constructor(value) {
    this.value = value
    defObserverEnumerable(value, '__ob__', this)
  }

  notify() {
    console.log('数据更新了', this.value)
  }
}

// 数据拦截
function defineReactive(object, beSetter) {
  if(!isObject(object)) {
    return
  }

  const ob = object.hasOwnProperty('__ob__') ? object.__ob__ : void 0
  if(ob instanceof Observer && !beSetter) {
    return
  } else {
    object.__ob__ = new Observer(object)
  }

  Object.keys(object).forEach(key => {
    let value = object[key]
    Object.defineProperty(object, key, {
      enumerable: true,
      configurable: false,
      get() {
        console.log('获取了属性:', key)
        return value
      },
      set(newValue) {
        if(value === newValue || ( value !== value && newValue !== newValue )) {
          return
        }
        console.log('获取了属性:', key, '为', newValue)
        object[key] = value = newValue
        defineReactive(value)
        object.__ob__.notify()
      }
    })

    if(isObject(value)) {
      defineReactive(value)
    } else if (isArray(value)){
      // 对数组进行其它操作
    }
  })
}

const obj = {
  prop: '123',
  o: {
    second: 1
  }
}

defineReactive(obj)

obj.o.second = 3
