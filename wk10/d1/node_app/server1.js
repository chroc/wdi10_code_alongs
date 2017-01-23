var app = function(request, response) {
  console.log('cool');
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('<p>hello</p>');
  response.end();
}

var server = require('http').createServer(app);
server.listen(3000);
console.log('server running...');

