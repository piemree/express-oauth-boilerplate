const router = require("express").Router();

require("./strategyRoutes/google")(router);
require("./strategyRoutes/github")(router);
require("./strategyRoutes/twitter")(router);
require("./strategyRoutes/local")(router);

module.exports = router;
