const express = require("express");
const router = express.Router();
const AuthController = require("./auth/Auth.controller");
const UserRouter = require("./User/User.controller");
const auth = require("./Middleware/auth");

router.use("/auth", AuthController);

router.use("/users", auth, UserRouter);

module.exports = router;
