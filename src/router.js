const express = require("express");
const router = express.Router();
const AuthController = require("./modules/auth/Auth.controller");
const UserRouter = require("./modules/user/User.controller");
const ProtectedRoute = require("./middleware/ProtectedRoute");

router.use("/auth", AuthController);

router.use("/users", UserRouter);

router.get("/me", ProtectedRoute, (req, res) => res.json(req.user));

module.exports = router;
