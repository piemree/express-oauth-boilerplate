const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const Users = [
  { id: 1, username: "emre", password: "123456" },
  { id: 2, username: "emir", password: "123" },
];

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    function (username, password, done) {
      const user = Users.find((user) => user.username === username);
      if (!user) {
        console.log("user not found");
        return done(null, false, { message: "Incorrect username." });
      }
      if (user.password !== password) {
        console.log("password mismatch");
        return done(null, false, { message: "Incorrect Password." });
      }
      return done(null, user);
    }
  )
);
