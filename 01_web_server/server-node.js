const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
     if (req.url === '/hello' || req.url === '/' ) { // Check the URL of the current request
          res.statusCode = 200;    // Set the status code
          res.setHeader('Content-Type', 'text/plain'); // Set the content type
          res.end('Hello World\n'); // Send a response to the client
     }
     else if (req.url === '/goodbye') { 
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain'); 
          res.end('Goodbye World\n'); 
     }
     else {
          res.statusCode = 404; 
          res.setHeader('Content-Type', 'text/plain'); 
          res.end('Not Found\n'); 
     }
});

server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
});  