var chalk = require('chalk')
console.log(chalk.cyan('  Build complete.\n'))
console.log(chalk.yellow(
  '  Tip: built files are meant to be served over an HTTP server.\n' +
  "  Opening index.html over file:// won't work.\n"
))
