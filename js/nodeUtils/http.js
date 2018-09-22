const http = require('http')

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})

  request.on('data', chunk => {
    response.write(chunk)
  })

  response.on('end', () => {
    console.log('get request')
    response.end()
  })
}).listen(1234)

var options = {
  hostname: 'localhost',
  port: 1234,
  path: '/upload',
  method: 'POST',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  }
};

var request = http.request(options, function (response) {});

request.write('Hello World');
request.end();
