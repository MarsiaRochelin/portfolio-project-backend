// DEPENDENCIES //
const cors = require("cors");
const express = require("express");
const projectsController = require("./controllers/projectController");

// CONFIGURATION //
const app = express();

// MIDDLEWARE //
app.use(cors());
app.use(express.json());

app.use("/projects", projectsController);

// ROUTES //
app.get("/", (req, res) => {
  res.send("Welcome to the To Code or Not Code App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT //
module.exports = app;
