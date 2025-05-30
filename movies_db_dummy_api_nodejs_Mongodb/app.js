const express = require("express");
const app = require();
const addmovie = require("/controllers/addMovies");

//routes...

app.post("/api/movies", addmovie);
app.listen(8000, () => {
  console.log("server started successfully");
});
