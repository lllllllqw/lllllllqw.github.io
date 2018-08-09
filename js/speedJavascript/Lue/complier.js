// 模板编译
function complier (template, _this) {
  template = template.replace(/{\s*([a-zA-Z_]{1}[a-zA-Z0-9_]*)\s*}/g, (matched, key) => {
    key = key.trim()
    if(key) {
      return _this[key]
    }
    return ''
  })
  return template
}

const res = complier(`I { doing } lqw`, {
  doing: 'am'
})
