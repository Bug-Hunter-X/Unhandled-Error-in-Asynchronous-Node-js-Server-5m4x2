const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        // Simulate a successful response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        // Simulate an error and handle it gracefully
        const error = new Error('Simulated error');
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error!');
        console.error('Error occurred:', error); // Log the error for debugging
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error!');
    }
  }, 1000); 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});