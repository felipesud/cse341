const express = require('express');
const swagger = require('swagger-autogen')();

const app = express();

const outputFile = 'swagger-output.json';

const endpointsFiles = ['./routes/index.js'];

swagger(outputFile, endpointsFiles);
