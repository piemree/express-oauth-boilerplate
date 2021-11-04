const { verifyToken } = require("../auth/Auth.service");
const { findByUsername } = require("../User/User.service");

module.exports = async (req, res, next) => {
  const user = verifyToken(req.cookies.token);
  if (user) {
    req.user = user;
    return next();
  }
  try {
    req.user = await findByUsername(req.body.username);
    next();
  } catch (error) {
    res
      .status(403)
      .render("login", {
        error: "Unauthorized",
        username: req.body.username,
        email: req.body.email,
      });
  }
};
