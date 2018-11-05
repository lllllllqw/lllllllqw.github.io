import http from 'http'
import Vue from 'vue'
import * as Renderer from 'vue-server-renderer'

const renderer = Renderer.createRenderer()
const app = new Vue({
  render(h) {
    return h('div', 'hello world!')
  },
})

const server = http.createServer((request, response) => {
  renderer.renderToString(app).then(html => {
    console.log(html)
    response.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>title</title>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `)
  })
})

server.listen(1995)
