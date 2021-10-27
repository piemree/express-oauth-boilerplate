const express = require("express");
const router = express.Router();
const logger = require("./helpers/logger.js");
const Rooms = require("./Rooms/Room.controller.js");
const Users = require("./User/User.controller");

router.use(function timeLog(req, res, next) {
  logger.log("Time: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  res.send("Home");
});

router.use("/users", Users);
router.use("/rooms", Rooms);

module.exports = router;
