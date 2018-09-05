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


// 传球问题
const persons = ['A', 'B', 'C', 'D', 'E']

const routes = []
const N = 5
const firstPerson = 'A'
const lastPerson = 'A'

routes.push([firstPerson])
for (let i = 1; i <= N; i++) {
  routes.push([])
  for (let route of routes[i - 1]) {
    const nowPerson = route[route.length - 1]
    for (let person of persons) {
      if(person === nowPerson) {
        continue
      } else if (nowPerson === 'A' && person === 'B') {
        continue
      } else if (nowPerson === 'B' && person === 'A') {
        continue
      } else if (nowPerson === 'C' && person !== 'D') {
        continue
      } else if (nowPerson === 'E' && person === 'C') {
        continue 
      } else if (i === N && person !== lastPerson) {
        continue
      } else {
        routes[i].push(route + person)
      }
    }
  }
  console.log(`第${i}次传球后有${routes[i].length}条路径`)
}