// 斐波那契数列
function fibonacci(n: number): number {
  if(n <= 1) {
    return 1
  } else {
    return fibonacci(n -1) + fibonacci(n - 2)
  }
}

// 阶乘
function factorial(n: number): number {
  if(n === 0) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

// 数组求和
function sumArray(array: number[], start: number, end: number): number {
  if(start === end){
    return array[start]
  } else {
    return array[start] + sumArray(array, start + 1, end)
  }
}

// 数组求最大值
function max(array: number[], start: number, end: number): number {
  if(start === end) {
    return array[start]
  }else {
    return Math.max(array[start], max(array, start + 1, end))
  }
}

// 数组反向
function reverse(str: string): string {
  if(str.length === 1) {
    return str
  } else {
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
  }
}

// 字符串长度
function strlen(str: string): number {
  if(str === '') {
    return 0
  } else {
    return strlen(str.substr(0, str.length - 1)) + 1
  }
}

