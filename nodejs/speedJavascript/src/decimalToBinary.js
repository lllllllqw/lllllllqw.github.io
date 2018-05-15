const Stack = require('./Stack')

function divideBy2(decNumber) {

  var remStack = new Stack(),
    rem, binaryString = '';

  while (decNumber > 0) { //{1}  
    // 储存余数到栈底
    rem = Math.floor(decNumber % 2); //{2}     
    remStack.push(rem); //{3}     
    // 保存剩下的数
    decNumber = Math.floor(decNumber / 2); //{4}   
  }

  while (!remStack.isEmpty()) { //{5}     
    // 从栈顶开始拼接
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

function decimalToBinary (decimal) {
  if(decimal instanceof Number || Math.round(decimal) !== decimal) {
    throw new Error('必须传入十进制整数')
  }
  const stack = new Stack()
  let binary = ''
  while(decimal > 0) {
    stack.push(Math.round(decimal % 2))
    decimal = Math.floor(decimal / 2)
  }
  while(!stack.isEmpty()) {
    binary += stack.pop()
  }
  return  binary || '0'
}

console.log(decimalToBinary(10))