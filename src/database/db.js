const { Sequelize } = require("sequelize");
const { PostgreConfig } = require("../../configs");

const db = new Sequelize("chatdb", "postgres", "202020", PostgreConfig);

async function authenticate() {
  try {
    return await db.authenticate();
  } catch (err) {
    console.log("Error: " + err);
  }
}

module.exports = { db, authenticate };
