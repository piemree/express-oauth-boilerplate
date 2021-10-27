const express = require("express");
const Users = express.Router();

Users.get("/", (req, res) => {
  res.send("users");
});

module.exports = Users;
