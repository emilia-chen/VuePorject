
var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

    console.log(path.resolve(__dirname, '../'))


console.log(resolve('index.html'))
