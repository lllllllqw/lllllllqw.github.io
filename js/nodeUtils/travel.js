const path = require('path')
const fs = require('fs')

function travel(dir, cb) {
  fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      const pathname = path.join(dir, file)
      if(fs.statSync(pathname).isDirectory()) {
        travel(pathname, cb)
      } else {
        cb(pathname)
      }
    }) 
  })
}

travel(process.argv[2], (pathName) => {
  console.log(pathName)
})