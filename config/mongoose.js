const mongoose = require("mongoose");
const Path = require("path");
require("dotenv").config({
  path: Path.join(__dirname, "..", "env", "one.env"),
});

mongoose.connect(
  "mongodb+srv://harshiwp123:harshiwp123@cluster0.nbxacbi.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
