const express = require('express');
const router = express.Router();

// Set the name of the person
const name = 'Nathalia Belisario';

// Define the route for the root URL (`/`)
router.get('/', (req, res) => {
  // Set the response headers to indicate that the content is HTML
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Write the name of the person as an `h1` HTML element to the response
  res.write(`<h1>${name}</h1>`);
  // End the response
  res.end();
});

module.exports = router;
