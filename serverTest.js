const http = require('http')

let server = http.createServer((req,res)=>{
    res.write('response from http server')
    res.end()
})
server.listen(3000)
console.log("server is listening at port 3000")