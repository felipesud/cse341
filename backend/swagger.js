const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Quiz API',
    description: 'Quiz API'
  },
  host: 'http://localhost:8080/',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

