const Identity = (val) => ({
  map(fn) {
    return Identity(fn(val))
  },

  valueOf() {
    return val
  },

  toString() {
    return `${val}`
  },

  *[Symbol.iterator]() {
    yield val
  }
})

Object.defineProperty(Identity, 'is', {
  enumerable: false,
  configurable: true,
  value(val) {
    return typeof val.map === 'function'
  }
})

console.log(Identity('332').map(num => num) + Identity('sasd').map(num => num))

console.log(...Identity('213'))

/**
 * @param {Identity} start 
 * @param {number} end 
 */
const fRange = (start, end) => {
  return Array.from({length: end - start + 1}, (_, i) => {
    return i + start
  })
}

const range = fRange(Identity(5), 10)

console.log(Identity.is(Identity(2)))