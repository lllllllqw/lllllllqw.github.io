const tokenlizer = require('./tokenlizer')

const token = tokenlizer('0110000101001010101')
// '1 plus 222 -> plus 1'

console.log(token)
