const { findAll, login, create } = require("./User.service");
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

//get one user by id
// router.get("/:id", (req, res) => {
//   findById(req.params.id)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => {
//       console.log(err);
//       res.status(404).send(err.message);
//     });
// });

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await create(username, email, password);
  res.send(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await login(email, password);
  if (user) return res.send(user);
  res.sendStatus(401);
});

module.exports = router;
