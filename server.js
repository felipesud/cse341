// Require the built-in `http` module
const http = require('http');

// Set the name of the person
const name = 'Nathalia Belisario';

// Create a server with a request listener
const server = http.createServer((req, res) => {
  // Check if the requested URL is the root URL
  if (req.url === '/') {
    // If so, set the response headers to indicate that the content is HTML
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Write the name of the person as an `h1` HTML element to the response
    res.write(`<h1>${name}</h1>`);
    // End the response
    res.end();
  } else {
    // If the requested URL is not the root URL, set the response headers to indicate that the content is plain text
    res.writeHead(404, {'Content-Type': 'text/plain'});
    // Write a "Page not found" message to the response
    res.write('Page not found');
    // End the response
    res.end();
  }
});

// Set the port number that the server will listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => console.log(`Server running on port ${port}`));
