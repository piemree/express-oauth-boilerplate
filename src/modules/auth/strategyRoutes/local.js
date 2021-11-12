const passport = require("passport");
const { create, resetPassword } = require("../../user/User.service");
const _ = require("lodash");
const {
  validateResetPassword,
  validateRegister,
} = require("../../../utils/validtor");

module.exports = (router) => {
  router.post("/login", passport.authenticate("local"), (req, res) => {
    const omited = _.omit(req.user, ["password"]);
    res.status(200).json(omited);
  });

  router.post("/register", async (req, res) => {
    const { errors } = await validateRegister(req.body);
    if (Object.keys(errors).length !== 0)
      return res.status(404).json({ errors: errors });

    const { username, email, password } = req.body;
    try {
      const user = await create(username, email, password);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

  router.post("/reset-password", async (req, res) => {
    const { errors } = validateResetPassword(req.body);
    if (Object.keys(errors).length !== 0)
      return res.status(404).json({ errors: errors });

    const userId = req.user.id;
    const { password, password2 } = req.body;
    try {
      await resetPassword(userId, password, password2);
      res.status(200).send("Password updated successfully");
    } catch (error) {
      res.status(404).send(error);
    }
  });

  router.get("/logout", (req, res) => {
    req.logout();
    res.sendStatus(200);
  });
};
