    // index.js (correct JavaScript code)

const http = require('http');  // Native Node.js module for creating an HTTP server

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');  // Basic response to requests
});

const port = 3000;  // Port number for the server to listen on
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
