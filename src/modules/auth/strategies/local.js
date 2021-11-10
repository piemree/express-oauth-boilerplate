const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { login } = require("../../user/User.service");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      const user = await login(email, password);
      if (!user) return done(null, false, { message: "User not found." });
      return done(null, user);
    }
  )
);
