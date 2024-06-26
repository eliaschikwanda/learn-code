

const http = require('node:http');
// This line imports the built in Node.js HTTP module, which provide provide
// functionalities to create HTTP servers and clients

const hostname = '127.0.0.1';
// Sets hostname for the server to '127.0.0.1', which is the localhost IP address.

const port = 3000;
// Sets the port number for the server to listen on

const server = http.createServer((req, res) => {
  // This creates an http server instance. The function passed to "http.createServer"
  // is a callback that will be executed everytime a server receives a request. The
  // callback function takes two arguments 'req' (request object) and 'res' (the response object)

  res.statusCode = 200;
  // This sets the HTTP status code of the response to 200, which means "OK"

  res.setHeader('Content-Type', 'text/plain');
  // This sets the Content-Type header of the response to text/plain, indicating
  // that the content of the response will be plain text.

  res.end('Hello, World!\n');
  // send the response 'Hello, World!' and close the response stream.
});

server.listen(port, hostname, () => {
  // This makes the server start listening for incoming requests on the specified hostname and port.
  console.log(`Server running at http://${hostname}:${port}/`);
  // This logs a message to the console indicating that the server is running and
  // specifies the URL where it can be accessed.
});