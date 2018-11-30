const fs = require('fs')

fs.copyFile('sample.txt','sample_copy.txt',(err)=>{
    if(err)
        console.log(err);
    console.log('copy successfull')
})

console.log('copy file synchronously')
fs.copyFileSync('sample.txt','sample_copy2.txt')