const passport = require("passport");
const _ = require("lodash");
const { create } = require("../../user/User.service");

module.exports = (router) => {
  router.post("/login", passport.authenticate("local"), (req, res) => {
    const omited = _.omit(req.user, ["password"]);
    res.status(200).json(omited);
  });

  router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = await create(username, email, password);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

  router.get("/logout", (req, res) => {
    req.logout();
    res.sendStatus(200);
  });
};
