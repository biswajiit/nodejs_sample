const fs = require('fs')

let content = fs.readFileSync('hello.js')
console.log(content.toString())

console.log('writting to the file')
let message = 'new line from node.js'
fs.writeFileSync('sample.txt',message)