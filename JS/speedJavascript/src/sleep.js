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


// 3.async/await版

function asyncSleep(sleepTime) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  }) 
}

async function startAsyncSleep(sleepTime) {
  console.time('asyncSleep')
  await asyncSleep(sleepTime)
  console.timeEnd('asyncSleep')
}

startAsyncSleep()