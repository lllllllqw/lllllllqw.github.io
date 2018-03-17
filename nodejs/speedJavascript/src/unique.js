let arr = [1, '1', 1, 3, 5, 5, 'a', 'b', 'a', 55, 'abvc']

// 1.普通方法
function normalUnique(arr) {
  let result = []
  for(let val of arr) {
    if(result.findIndex(item => item === val) === -1) {
      result.push(val)
    }
  }
  return result
}

console.log('normal:', normalUnique(arr))

// 2.使用filter,取到ele的索引跟当前索引相等
function filterUnique(arr) {
    return arr.filter(function(ele,index,array){
        return array.indexOf(ele) === index
    })
}
console.log('filter:', filterUnique(arr))

// 3.使用{}.hasOwnProperty黑科技,得到较低复杂度解
function hackUnique(arr) {
  let obj = {}
  return arr.filter((val, index, array) => {
    return obj.hasOwnProperty(typeof val + val) ? false : obj[typeof val + val] = true
  })
}
console.log('hack:', hackUnique(arr))

// 4.使用ES6 Set对象
function useSetUnique(arr) {
  // (1)
  // return Array.from(new Set(arr))
  // (2)
  return [...new Set(arr)]
}
console.log('Set:', useSetUnique(arr))