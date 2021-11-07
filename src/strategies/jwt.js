const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
// opts.issuer = "accounts.examplesoft.com";
// opts.audience = "yoursite.net";

const Users = [
  { id: 1, username: "emre", password: "123456" },
  { id: 2, username: "emir", password: "123" },
];

passport.use(
  new JwtStrategy(opts, function (jwtPayload, done) {
    const user = Users.find((user) => user.username === jwtPayload.username);
    if (!user) {
      console.log("user not found");
      return done(null, false, { message: "Incorrect username." });
    }
    return done(null, user);
  })
);
