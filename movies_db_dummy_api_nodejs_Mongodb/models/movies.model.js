const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  movie_name: {
    type: String,
  },
  info: {
    tyoe: String,
  },
  rating: {
    type: Number,
  },
});

const moviesModel = mongoose.model("movies,moviesSchema");
module.exports =moviesModel;
