const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const mongodb = require('./data/database');
const app = express();
const bodyParser = require('body-parser');
app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
app.use(bodyParser.json());




mongodb.initDb((err) => {
  if(err){
    console.log(err);
  }else {
    app.listen(port, () => {
      console.log(`Database is  listening and running on port ${port}`);
    });
  }
})


