var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200);
    response.end('Hey mate!')
});

server.listen(8080);
console.log('Server listening on port 8080..');
