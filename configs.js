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
