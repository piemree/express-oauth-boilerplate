const { Sequelize } = require("sequelize");
const { DatabseConfig, DataBaseCredentials } = require("../configs");

const db = new Sequelize(
  DataBaseCredentials.database,
  DataBaseCredentials.username,
  DataBaseCredentials.password,
  DatabseConfig
);

async function authenticate() {
  try {
    return await db.authenticate();
  } catch (err) {
    console.log("Error: " + err);
  }
}

module.exports = { db, authenticate };
