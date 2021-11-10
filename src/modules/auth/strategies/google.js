const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { GoogleKeys } = require("../../../configs");
const passport = require("passport");
const User = require("../../user/User.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: GoogleKeys.GOOGLE_CLIENT_ID,
      clientSecret: GoogleKeys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const user = await User.findOne({ where: { googleId: profile.id } });

        if (user) return cb(null, user);
        const newUser = await User.create({
          googleId: profile.id,
          username: profile._json.email.split("@")[0],
          email: profile._json.email,
        });
        return cb(null, newUser);
      } catch (error) {
        return cb(error, false);
      }
    }
  )
);
