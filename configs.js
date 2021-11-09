require("dotenv").config();

module.exports.PostgreConfig = {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports.JwtPrivateKey = process.env.JWT_PRIVATE_KEY || "secret";

module.exports.GoogleKeys = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

module.exports.githubKeys = {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
};

module.exports.twitterKeys = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
};
