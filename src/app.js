const express = require("express");
const app = express();
const passport = require("passport");
const router = require("./router");
const db = require("./database/db");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const sessionSecret = process.env.sessionSecret || "secret";

async function startApp() {
  try {
    await db.authenticate();
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection error: " + err.message);
  }

  app.use(cors());
  // app.use(
  //   cors({
  //     origin: "*",
  //     credentials: true,
  //     methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  //   })
  // );

  app.use(cookieParser(sessionSecret));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    session({
      secret: sessionSecret,
      cookie: { secure: process.env.NODE_ENV === "production" ? true : false },
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  require("./modules/auth/strategies");

  app.use("/", router);

  app.get("/failed", (req, res) => res.send("Failed"));

  app.listen(PORT, () => console.info(`listening on http://${HOST}:${PORT}`));
}

startApp();
