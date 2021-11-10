const Sequelize = require("sequelize");
const { db } = require("../../database/db");

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  googleId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  twitterId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  githubId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = User;
