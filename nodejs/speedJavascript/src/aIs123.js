// js中可能存在 a == 1 && a == 2 & a == 3 为 true 的情况吗

// 使用非全等判断时会先调用toString
function palnOne() {
  let a = {
    i: 1,
    toString: function() {
      return this.i++
    }
  }

  if(a == 1 && a == 2 & a == 3) {
    console.log('plan 1 pass')
  }
}

// 在get a()返回随机的作用域中执行获取a，每次都会有不同的值
function planTwo() {
  with({get a() {
    return Math.ceil(Math.random() * 3)  
  }}) {
    for(let i = 1; i < 1000; i++) {
      if(a == 1 && a == 2 && a == 3) {
        console.log('plan 2 pass')
        break
      }
  }
  }
}

palnOne()
planTwo()