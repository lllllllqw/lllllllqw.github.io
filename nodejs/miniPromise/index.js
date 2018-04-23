const MiniPromise = require('./Promise')

let foo = new MiniPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 500)
})

console.log(foo)