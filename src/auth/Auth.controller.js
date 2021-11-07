const { create } = require("../User/User.service");
const { checkUserAndCreateToken } = require("./Auth.service");
const router = require("express").Router();
require("dotenv").config();

router.post("/register", (req, res) => {
  create(req.body)
    .then((result) => res.status(200).send("ok"))
    .catch((err) => {
      console.log(err);
      res.status(404).send(err.message);
    });
});

router.post("/login", (req, res) => {
  const user = req.body;
  if (user.username === "" || user.password === "")
    return res.status(403).send("request has not include user object");

  const isToken = checkUserAndCreateToken(user);
  if (!isToken)
    return res.status(403).send("request has not include user object");
  res.json(isToken);
});

module.exports = router;
