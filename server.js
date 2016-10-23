var http = require('http');
var port = 1234;

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end("Hello World!");
}).listen(port);

console.log('Our server is running at http://localhost:'+ port);