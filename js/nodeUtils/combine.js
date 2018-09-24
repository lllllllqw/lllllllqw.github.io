const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const config = {
  port: 2222
}

function main (argv) {
  http.createServer((request, response) => {
    const {pathname, search} = url.parse(request.url)
    if(!search) {
      return response.end('err search')
    }
    const filePath = path.join(__dirname, pathname)
    const filePaths = search.substring(2).split(',').map(fileName => path.join(filePath, fileName))
    response.setHeader('Content-Type', 'text/plain')
    pipeResponse(filePaths, response)
  }).listen(config.port)
}

function pipeResponse(filePaths, response) {
  if(filePaths.length > 0) {
    const [current, ...others] = filePaths
    const reader = fs.createReadStream(current, {})
    reader.pipe(response, {end: false})
    reader.on('end', () => pipeResponse(others, response))
  } else {
    response.end()
  }
}

main(process.argv.slice(2))

// http://localhost:2222/folder/??spwan.js,copy.js