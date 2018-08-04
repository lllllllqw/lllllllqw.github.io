const tokenlizer = (str) => {
  // (11 - 1) --> ['(', '11', '-', '1', ')']
  const result = []
  let last = ''
  str.split('').forEach(char => {
    const testResult = isValidChar(char)
    if (testResult) {
      if (testResult === 'number') {
        if (last !== 'number') {
          result.push({
            type: testResult,
            value: char
          })
          last = testResult
        } else {
          result[result.length - 1].value += char
        }
      } else if (testResult === 'space') {
        last = testResult
      } else {
        result.push({
          type: testResult,
          value: char
        })
        last = testResult
      }
    } else {
      throw new Error('语法错误!')
    }
  })
  return result
}


const isValidChar = char => {
  for (const item of chars) {
    if (item.rule.test(char)) {
      return item.type
    }
  }
  return false
}

const chars = [{
    rule: /^[0-9]*$/,
    type: 'number'
  },
  {
    rule: /[()]/,
    type: 'paren'
  },
  {
    rule: /[\+\-*\/]/,
    type: 'operator'
  }, {
    rule: /\s/,
    type: 'space'
  }
]

module.exports = tokenlizer