const express = require("express");
const router = express.Router();
const logger = require("./helpers/logger.js");
const Rooms = require("./Rooms/Room.controller.js");
const UserRouter = require("./User/User.controller");

router.use(function timeLog(req, res, next) {
  logger.log("Time: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  const clientObj = {
    username: "emole",
    email: "q@q.com",
  };
  res.render("login", clientObj);
});

router.use("/users", UserRouter);
router.use("/rooms", Rooms);

module.exports = router;
