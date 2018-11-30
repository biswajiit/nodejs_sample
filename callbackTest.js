var fs = require('fs')
fs.readFile('sample.txt1',function(err,data){
    if(err)
        return console.error(err.toString())
    console.log(data.toString())
})

