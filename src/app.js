const express = require("express");
const app = express();
const passport = require("passport");
const router = require("./router");
const db = require("./database/db");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

async function startApp() {
  try {
    await db.authenticate();
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection error: " + err.message);
  }

  app.use(cors({ origin: "http://localhost:8000", credentials: true }));
  app.use(cookieParser("secret"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(
    session({
      secret: "secret",
      cookie: { secure: false },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  require("./strategies/google");

  passport.serializeUser(function (user, done) {
    console.log(user, "serialize user");
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    console.log(id, "deserializeUser");
    //const user = Users.find((user) => user.id === id);
    // if (!user) done(new Error("User not found"), false);
    done(null, {
      id: 1,
      username: "emre",
      password: "123456",
      email: "xpokales@gmail.com",
    });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.send("logout successful"); //Can fire before session is destroyed?
  });
  app.get("/failed", (req, res) => {
    res.send("Failed");
  });
  app.get(
    "/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
  );
  app.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/failed",
    }),
    function (req, res) {
      console.log("after callback", req.isAuthenticated());
      req.session.save(() => {
        res.redirect("http://localhost:8000");
      });
    }
  );

  const authg = (req, res, next) => {
    console.log("middleware", req.isAuthenticated());
    if (req.isAuthenticated()) return next();
    res.status(401).send("not auth");
  };

  app.get("/user", authg, (req, res) => {
    console.log(req.user);
    res.json(req.user);
  });
  app.listen(PORT, () => console.info(`listening on http://${HOST}:${PORT}`));
}

startApp();
