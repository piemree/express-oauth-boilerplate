const { findAll, deleteById } = require("./User.service");
const express = require("express");
const router = express.Router();

// get all users
router.get("/", async function findAllUsers(req, res) {
  findAll()
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

module.exports = router;
