const http = require('http');

const name = 'Nathalia Belisario';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h1>${name}</h1>`);
    res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Page not found');
    res.end();
  }
});

const port = 3000;

server.listen(port, () => console.log(`Server running on port ${port}`));
