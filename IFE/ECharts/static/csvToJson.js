// 实现将task04.csv转换为json
const csvToJson = require('csvtojson')
const fs = require('fs')
const path = require('path')

const data = []
csvToJson({
  noheader: true
})
  .fromFile(path.resolve(__dirname, 'task04.csv'))
  .on('json', jsonObj => {
    data.push(jsonObj)
  })
  .on('end', () => {
    fs.writeFile(path.resolve(__dirname, `task04_${+new Date()}.json`), JSON.stringify(data), err => {
      if (err) {
        return console.log(err)
      }
      console.log('转换成功')
    })
  })
  .on('error', err => {
    console.log(err)
  })
