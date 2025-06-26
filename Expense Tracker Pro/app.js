require("express-async-errors"); // importing exoress async errors then the errors are caught automatically and we dont have to use try and catch

const express = require("express"); // importing express
const errorHandler = require("./handlers/errorHandlers");
const mongoose = require("mongoose"); // importing mongoose
const userRoutes = require("./modules/users/users.routes");

require("dotenv").config();

const app = express();

// connecting our database

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("database connected successfully");
  })
  .catch(() => {
    console.log("mongo connection failed");
  });

// model initialisation
require("./models/users.model")


app.use(express.json());

app.use("/api/users", userRoutes);   // Routes

// end all routes ...

app.use(errorHandler);

app.listen(8000, () => {
  console.log("server started successfully");
});
