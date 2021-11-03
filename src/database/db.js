const { Sequelize } = require("sequelize");
const { PostgreConfig } = require("../../configs/dbConfig");

const db = new Sequelize("chatdb", "postgres", "202020", PostgreConfig);

function authenticate() {
  return db
    .authenticate()
    .then(() => {
      console.log("Database connected...");
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
}

module.exports = { db, authenticate };
