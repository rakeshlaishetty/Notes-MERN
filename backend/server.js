const express = require("express");
const notes = require("../backend/data/notes");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.find((note) => {
    return note._id === req.params.id;
  });
  if (!note) {
    res.send("Sorry File not Found");
  } else {
    res.json(note);
  }
});

app.listen(port, () => {
  console.log(`Hello Your Server is Running On http://localhost:${port}`);
});
