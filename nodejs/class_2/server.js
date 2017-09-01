var http = require('http');

var server = http.createServer(function(request, response){

    // Server entry
    if(request.url === "/" && request.method === "GET"){
      response.writeHead(200);
      response.end('Welcome on your local server!')
    }

    // GET /messages route - Return list of messages from database
    if(request.url === "/messages" && request.method === "GET"){
      response.writeHead(200);
      response.end('Here is the list of messages')
    }

    // POST /messages route - Save the posted message in database
    if(request.url === "/messages" && request.method === "POST"){
      response.writeHead(200);
      response.end('Message saved!')
    }

    // GET /users route - Return list of users from database
    if(request.url === "/users" && request.method === "GET"){
      response.writeHead(200);
      response.end('Here is the list of users')
    }

    // Return 404 error when clients try
    // to access other routes
    response.writeHead(404);
    response.end('Page not found')
});

server.listen(8080);
console.log('Server listening on port 8080..');
