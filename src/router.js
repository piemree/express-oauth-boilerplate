const express = require("express");
const router = express.Router();
const AuthController = require("./auth/Auth.controller");
const UserRouter = require("./User/User.controller");

router.use("/auth", AuthController);

router.use("/users", UserRouter);

module.exports = router;
