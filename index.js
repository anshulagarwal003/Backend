require("dotenv").config();
// This is a simple Express server that serves a few routes
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/login", (req, res) => {
  res.send("<h1> please login at your favourite website</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
