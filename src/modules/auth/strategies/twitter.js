const twitterStrategy = require("passport-twitter").Strategy;
const { twitterKeys } = require("../../../configs");
const passport = require("passport");
const User = require("../../user/User.model");

passport.use(
  new twitterStrategy(
    {
      consumerKey: twitterKeys.TWITTER_CONSUMER_KEY,
      consumerSecret: twitterKeys.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const user = await User.findOne({ where: { twitterId: profile.id } });

        if (user) return cb(null, user);
        const newUser = await User.create({
          twitterId: profile.id,
          username: profile.username,
        });
        return cb(null, newUser);
      } catch (error) {
        return cb(error, false);
      }
    }
  )
);
