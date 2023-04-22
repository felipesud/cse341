// Require the `express` module
const express = require('express');

// Require the `index.js` file from the `routes` folder
const indexRoute = require('./routes/index');

// Create an `express` app
const app = express();

// Use the `index.js` file as a middleware to handle requests for the root URL (`/`)
app.use('/', indexRoute);

// Set the port number that the server will listen on
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server running on port ${port}`));
