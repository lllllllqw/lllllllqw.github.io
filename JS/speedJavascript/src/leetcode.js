// 反序字符串
function revert(str) {
  const s = str.split('')
  let isPlural
  if(s.length % 2) {
    isPlural = false
  } else {
    isPlural = true
  }
  let i = 0
  while( i <= (isPlural ? s.length / 2 : Math.floor(s.length / 2))) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
    i ++
  }
  
  return s.join('')
}

// revert('hello') // 'olleh'

// 判断s,t是否是同样的字符构成
function isAnagram(s, t) {
  if(s.length !== t.length) {
    return false
  }
  let sortS = s.split('').sort().join('')
  let sortT = t.split('').sort().join('')
  return sortS === sortT
}

// console.log(isAnagram('r-e', 're-')) // true