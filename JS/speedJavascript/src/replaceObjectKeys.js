// 转换 object 里的 key
function replaceObjectKeys(object, transferFn = key => key) {
  const o = {}
  Object.keys(object).forEach(key => {
    o[transferFn(key)] = object[key]
  })
  return o
}