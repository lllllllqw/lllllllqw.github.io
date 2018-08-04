// 普通多重递归计算,复杂度高
function getYanghuiSanJiao(n) {
  n--
  if(n == 0 || n === 1) {
    return new Array(n + 1).fill(1)
  } else {
    let arr = []
    for(let i = 0; i <= n; i++) {
      if(i === 0 || i === n) {
        arr.push(1)
      } else {
        arr.push(getYanghuiSanJiao(n)[i - 1] + getYanghuiSanJiao(n)[i])
      }
    }
    return arr
  }
}

const n = 3
console.time('xxx')
const yanghuisanjiao = getYanghuiSanJiao(n)
console.timeEnd('xxx')
yanghuisanjiao

// 简化后的计算
function getYanghuiSanJiaoPro(n) {
  const arr = []
  function getYanghuiSanJiao(n, prevArr) {
    n--
    if(n == 0 || n === 1) {
      prevArr.push(new Array(n + 1).fill(1))
    } else {
      let arr = []
      for(let i = 0; i <= n; i++) {
        if(i === 0 || i === n) {
          arr.push(1)
        } else {
          arr.push(prevArr[n - 1][i - 1] + prevArr[n - 1][i])
        }
      }
      prevArr.push(arr)
    }
  }

  for(let i = 1; i <= n; i++) {
    getYanghuiSanJiao(i, arr)
  }

  return arr[n - 1]
}

const sanjiao = getYanghuiSanJiaoPro(4)

sanjiao

