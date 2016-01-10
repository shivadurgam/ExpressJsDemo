const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname);
  console.log('Server running at http:/\/127.0.0.1:1337/');

