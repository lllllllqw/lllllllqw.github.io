// 优雅地实现sleep

// 1.粗暴简单版,但是无论cpu多么强劲,都要爆炸
function forLoopSleep(sleepTime) {
  for(let start = +new Date(); +new Date() - start <= sleepTime; ){}
}

console.time('forLoopSleep')
forLoopSleep(1000)
console.timeEnd('forLoopSleep')

// 2.Promise版,不占用cpu,但是如果需要跳出,会很麻烦
function promiseSleep(sleepTime) {
  return new Promise(resolve => setTimeout( resolve, sleepTime))
}

console.time('promiseSleep')
forLoopSleep(1000)
console.timeEnd('promiseSleep')


// function sleep(delay) {
//   return new Promise(reslove => {
//     setTimeout(reslove, delay)
//   })
// }

// (async function test() {
//   const t1 = +new Date()
//   await sleep(1000)
//   const t2 = +new Date()
//   console.log(t2 - t1)
// })()