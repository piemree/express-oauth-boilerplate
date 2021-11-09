const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { GoogleKeys } = require("../../configs");
const passport = require("passport");
const User = require("../User/User.model");

const Users = [
  { id: 1, username: "emre", password: "123456", email: "xpokales@gmail.com" },
  { id: 2, username: "emir", password: "123", email: "pi.emree@gmail.com" },
];

passport.use(
  new GoogleStrategy(
    {
      clientID: GoogleKeys.GOOGLE_CLIENT_ID,
      clientSecret: GoogleKeys.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      //const user = Users.find((user) => user.email === profile._json.email);
      return cb(null, {
        id: 1,
        username: "emre",
        password: "123456",
        email: "xpokales@gmail.com",
      });
    }
  )
);
