const fs = require('fs')

function main(from, to) {
  copy(from, to)
}

function copyWithSync(from, to) {
  fs.writeFileSync(to, fs.readFileSync(from))
}

function copyWithStream(from, to) {
  fs.createReadStream(from).pipe(fs.createWriteStream(to))
}

const [, ,from, to] = process.argv
copyWithStream(from, to)