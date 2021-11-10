const githubStrategy = require("passport-github2").Strategy;
const { githubKeys } = require("../../../configs");
const passport = require("passport");
const User = require("../../user/User.model");

passport.use(
  new githubStrategy(
    {
      clientID: githubKeys.GITHUB_CLIENT_ID,
      clientSecret: githubKeys.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const user = await User.findOne({ where: { githubId: profile.id } });

        if (user) return cb(null, user);
        const newUser = await User.create({
          githubId: profile.id,
          username: profile.username,
          email: profile._json.email,
        });
        return cb(null, newUser);
      } catch (error) {
        return cb(error, false);
      }
    }
  )
);
