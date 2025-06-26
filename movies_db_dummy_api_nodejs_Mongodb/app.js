const express = require("express");
require("dotenv").config();
const addMovie = require("./Controllers/addMovie");

const mongoose = require("mongoose");

// connection to mongo db

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("connection to mongodb successful");
  })
  .catch(() => {
    console.log("connection to mongodb failed");
  });

const app = express();
app.use(express.json());
// models

require("./models/movies.model");

//routes...

app.post("/api/movies", addMovie);
app.listen(8000, () => {
  console.log("server started successfully");
});
