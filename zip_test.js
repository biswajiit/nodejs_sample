const fs = require('fs')
const zlib = require('zlib')

let gZip = zlib.createGzip()
let iStream = fs.createReadStream('sample.txt')
let oStream = fs.createWriteStream('sample.txt.gz')

iStream.pipe(gZip).pipe(oStream).on('finish',()=>{
    console.log('file is zipped')
})