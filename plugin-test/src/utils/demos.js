const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: {
    inner: 'inner'
  }
}

// ES6解构去除某个属性
function deleteSomeAttr() {
  const { a, b, ...wanted } = obj
  console.log(wanted)
}

// ES结构获取内部属性
function getInnerAttr() {
  const { e: { inner }} = obj
  console.log(inner)
}

getInnerAttr()
