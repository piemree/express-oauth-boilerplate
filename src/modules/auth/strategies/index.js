const passport = require("passport");
const User = require("../../user/User.model");

//Initialize the strategies
require("./google");
require("./github");
require("./local");
//require("./twitter");
//require("./jwt");

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
