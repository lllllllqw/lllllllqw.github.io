const child_process = require('child_process')
const child = child_process.spawn('node', ['./js/nodeUtils/http.js'])

child.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

child.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

child.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

process.on('message', msg => {
  console.log('父进程接收', msg)
})

setTimeout(() => {
  child.send({user: 'lqw'})
}, 3000);