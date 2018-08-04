const MiniPromise = require('./Promise')

function createPromise() {
  return new MiniPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功')
    }, 1500)
  })
}

createPromise()
  .then(res => {
    console.log(`获得值${res}`)
  })