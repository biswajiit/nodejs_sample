const net = require('net')
var server = net.createServer(function(socket) {
  socket.setEncoding('utf8')
  socket.on('data', function(buffer) {
              var decoded = buffer
              console.log(decoded)
          })
  socket.on('end', socket.end)
  });
server.on('connection', handleConnection);
server.listen(8082, function() {
  console.log('server listening to %j', server.address());
});
function handleConnection(conn) {  
  var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
  console.log('new client connection from %s', remoteAddress);
  conn.on('data', onConnData);
  conn.once('close', onConnClose);
  conn.on('error', onConnError);
}