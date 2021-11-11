const { findAll, resetPassword, create } = require("./User.service");
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

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await create(username, email, password);
  res.send(user);
});

router.post("/reset-password", async (req, res) => {
  const userId = req.user.id;
  const { newPassword, newPassword2 } = req.body;
  try {
    await resetPassword(userId, newPassword, newPassword2);
    res.status(200).json({ message: "Password updated" });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
