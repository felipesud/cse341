const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./api/db/connect");
const professionalRoutes = require("./api/routes/professional");
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/professional", professionalRoutes);

mongodb.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port: ${port}`);
    });
  }
});
