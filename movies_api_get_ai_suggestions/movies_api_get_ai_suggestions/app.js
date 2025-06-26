const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");

const mongoose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
const movieRecommendation = require("./controllers/movieRecommendation");

// Connection to mongodb..

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Connection to mongodb successful!");
  })
  .catch(() => {
    console.log("Connection to mongodb failed!");
  });

const app = express();

app.use(express.json());

// Models...
require("./models/movies.model");

// Routes...

app.get("/movies/getRecommendation", movieRecommendation);

app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);

app.delete("/api/movies/:movie_id", deleteMovie);

// Openai suggestions

app.get("/api/movies/openai/getRecommendations", movieRecommendation);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
