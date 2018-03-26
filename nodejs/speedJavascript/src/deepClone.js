// 对象/数组 深拷贝

var obj = {
  foo: 1,
  bar: {
    foo: 123,
    bar: function () {
      console.log('obj.bar.bar')
    }
  }
}

function deepClone(source) {
  if (!source || typeof source !== 'object') {
    return source
  }
  let duplicate = Array.isArray(source) ? [] : {}
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      if (typeof source[i] === 'object') {
        duplicate[i] = deepClone(source[i])
      } else {
        duplicate[i] = source[i]
      }
    }
  }
  return duplicate
}

let obj2 = deepClone(obj)
obj.bar.bar()
obj2.bar.bar()
obj2.bar.bar = null
obj.bar.bar()
try{
  obj2.bar.bar()
}catch(e) {
  console.log(e)
}