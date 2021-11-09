const passport = require("passport");
module.exports = (router) => {
  router.get(
    "/twitter",
    passport.authenticate("twitter", {
      scope: ["email", "profile"],
    })
  );
  router.get(
    "/twitter/callback",
    passport.authenticate("twitter", {
      failureRedirect: "/failed",
    }),
    function (req, res) {
      req.session.save(() => {
        res.redirect("http://localhost:8000");
      });
    }
  );
};
