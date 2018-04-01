function autoCache(callback) {
  let cache = null
  return function(...args) {
    console.log(args)
    if(cache) {
      return cache
    }else{
      cache = callback.apply(this || {}, args)
      return cache
    }
  }
}

const big = autoCache(() => {
  console.log('calculate')
  return Math.pow(3, 12)
})

const getData = autoCache(() => {
  console.log('fetch')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve.bind(null, 'result')
    }, 1000)
  })
})


console.log(big(123, 5, 8))
console.log(big())

getData().then(res => console.log(res))
getData().then(res => console.log(res))