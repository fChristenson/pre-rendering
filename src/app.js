const express = require("express");
const todos = require("./todos");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.static(path.resolve(__dirname, ".")));

app.use(express.json());

app.get("/todos", (req, res) => {
  res.render("index", { todos: todos.reverse() });
});

app.get("/cats", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "overview.html"));
});

app.get("/cats/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", `${req.params.id}.html`));
});

module.exports = app;
