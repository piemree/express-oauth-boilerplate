const { generateTokenAndSetCooike } = require("./Auth.service");
const { create } = require("../User/User.service");
const router = require("express").Router();
const auth = require("../Middleware/auth");
require("dotenv").config();

// login page
router.get("/login", (req, res) => res.render("login"));
// Register page
router.get("/register", (req, res) => res.render("register", { y }));

router.post("/register", (req, res) => {
  create(req.body)
    .then((result) => res.status(200).redirect("/login"))
    .catch((err) => {
      console.log(err);
      res.status(404).send(err.message);
    });
});

router.post("/login", auth, (req, res) => {
  generateTokenAndSetCooike(req);
  res.send(req.user);
});

module.exports = router;
