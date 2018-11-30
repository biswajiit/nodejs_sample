const net = require('net')
net.createServer((socket) => {
    console.log('client connected')
    socket.on('end',()=>{
        console.log('client disconnected')
    })

    socket.write('go ahead and type something')
    socket.on('readable', function(){
        process.stdout.write(this.read())
    })

}).listen(8081, ()=>{
    console.log('server bound')
})