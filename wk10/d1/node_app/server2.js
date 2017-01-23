const fs = require('fs');
const url = require('url');
const http = require('http');

var app = function(request, response) {
  var path = url.parse(request.url).pathname;
  console.log(path);
  switch(path) {
    case '/':
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end('hello world');
      break;
    case '/about':
      fs.readFile(__dirname + '/about.html', function(error, data) {
        response.end(data.toString());
      });
      break;
    default:
      response.writeHead(404);
      response.end('page not found');
  }
}

var server = http.createServer(app);
const port = 3000;
server.listen(port);
console.log(`server listening on port ${port}`);

