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

  app.use(cors());
  app.use(cookieParser("keyboard cat"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(
    require("express-session")({
      secret: "keyboard ca",
      resave: true,
      saveUninitialized: true,
    })
  );

  const Users = [
    { id: 1, username: "emre", password: "123456" },
    { id: 2, username: "emir", password: "123" },
  ];
  app.use(passport.initialize());
  app.use(passport.session());

  require("./strategies/local");
  require("./strategies/jwt");

  passport.serializeUser(function (user, done) {
    console.log(user, "serialize user");
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    console.log(id, "deserializeUser");
    const user = Users.find((user) => user.id === id);
    if (!user) done(new Error("User not found"), false);
    done(null, user);
  });

  app.post(
    "/login",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      console.log(req.user);
      res.status(200).send(req.user);
    }
  );

  const jwt = require("jsonwebtoken");
  app.post("/register", (req, res) => {
    const token = jwt.sign(
      { id: 1, username: "emre", password: "123456" },
      "secret"
    );
    res.status(200).send(token);
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.send("logout successful"); //Can fire before session is destroyed?
  });

  const auth = require("./Middleware/Auth");

  app.get(
    "/users",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.send(Users);
    }
  );

  app.listen(PORT, () => console.info(`listening on http://${HOST}:${PORT}`));
}

startApp();
