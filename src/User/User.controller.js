const {
  findAll,
  findById,
  create,
  deleteById,
  updateUser,
} = require("./User.service");
const express = require("express");
const logger = require("../helpers/logger");
const router = express.Router();

// get all users
router.get("/", async function findAllUsers(req, res) {
  findAll()
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

//get one user by id
router.get("/:id", (req, res) => {
  findById(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(err);
      res.status(404).send(err.message);
    });
});

router.post("/create", (req, res) => {
  create(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(err);
      res.status(404).send(err.message);
    });
});

module.exports = router;
