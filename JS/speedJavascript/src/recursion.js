function fibonacci(n) {
  if(n <= 1) {
    return 1
  } else {
    return fibonacci(n -1) + fibonacci(n - 2)
  }
}

function factorial(n) {
  if(n === 0) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

function sumArray(array, start, end) {
  if(start === end){
    return array[start]
  } else {
    return array[start] + sumArray(array, start + 1, end)
  }
}

function max(array, start, end) {
  if(start === end) {
    return array[start]
  }else {
    return Math.max(array[start], max(array, start + 1, end))
  }
}

function reverse(str) {
  if(str.length === 1) {
    return str
  } else {
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
  }
}

function strlen(str) {
  if(str === '') {
    return 0
  } else {
    return strlen(str.substr(0, str.length - 1)) + 1
  }
}

const name = strlen('adnama423scj')

console.log(`name ---> ${name}`)