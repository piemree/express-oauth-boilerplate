const router = require("express").Router();
require("dotenv");
const redirectUrl = process.env.REDIRECT_URL || "http://localhost:8000";
require("./strategyRoutes/google")(router, redirectUrl);
require("./strategyRoutes/github")(router, redirectUrl);
require("./strategyRoutes/twitter")(router, redirectUrl);
require("./strategyRoutes/local")(router);

module.exports = router;
