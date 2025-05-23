// So we are creating app.js as a contrast for index.js to see how express  works in real and how it is different from the index.js
// import express
const express = require("express");
const fs = require("fs"); //Import the file system in the file
const app = express();

//rounting
app.get("/", (req, res) => {
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    res.send(data);
  }); // that is how we will the file
});
app.get("/Cars", (req, res) => {
  res.send("hello ching ching!!");
});
app.listen(8000, () => {
  console.log("server connected succesfully");
});
