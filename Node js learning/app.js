// So we are creating app.js as a contrast for index.js to see how express  works in real and how it is different from the index.js
// import express
const express = require("express");
const fs = require("fs"); //Import the file system in the file
const app = express();

//rounting
// plus here we know how to read the data here
app.get("/", (req, res) => {
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) res.send("there was and error accessing the file");
    res.send(data);
  }); // that is how we will the file
});
// writing on the page
app.get("/write", (req, res) => {
  fs.writeFile("./data.txt", "cherry", (err) => {
    if (err) res.send("error in the file");

    res.send("data written successfully");
  });
});
app.get("/Cars", (req, res) => {
  res.send("hello ching ching!!");
});
app.listen(8000, () => {
  console.log("server connected succesfully");
});

