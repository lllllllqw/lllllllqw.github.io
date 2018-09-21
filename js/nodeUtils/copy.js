const fs = require('fs')

function main(from, to) {
  copy(from, to)
}

function copy(from, to) {
  fs.writeFileSync(to, fs.readFileSync(from))
}
const [, ,from, to] = process.argv
copy(from, to)