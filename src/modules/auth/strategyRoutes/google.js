const passport = require("passport");
module.exports = (router, redirectUrl) => {
  router.get(
    "/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
  );
  router.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/failed",
    }),
    function (req, res) {
      req.session.save(() => {
        res.redirect(redirectUrl);
      });
    }
  );
};
