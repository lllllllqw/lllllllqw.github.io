// 优雅地实现sleep

// 1.粗暴简单版,但是无论cpu多么强劲,都要爆炸
function forLoopSleep(sleepTime) {
  for(let start = +new Date(); +new Date() - start <= sleepTime; ){}
}

console.time('forLoopSleep')
forLoopSleep(3000)
console.timeEnd('forLoopSleep')
