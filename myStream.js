const fs = require('fs')

let fwrite = fs.createWriteStream('demo.txt')
fwrite.write('first line \r')
fwrite.write('2nd line \r')
fwrite.write('3rd line \r')
fwrite.write('4th line \r')
fwrite.write('5th line \r')
fwrite.end()

fwrite.on('finish',()=> console.log('writting is finished'))
fwrite.on('error',()=> console.log('some error occured'))