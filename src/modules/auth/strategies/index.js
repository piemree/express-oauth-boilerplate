const passport = require("passport");
const User = require("../../user/User.model");
require("./google");
require("./github");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});
