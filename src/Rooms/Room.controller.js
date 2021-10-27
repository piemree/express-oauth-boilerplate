const express = require("express");
const Rooms = express.Router();

Rooms.get("/", (req, res) => {
  res.send("rooms");
});

module.exports = Rooms;
