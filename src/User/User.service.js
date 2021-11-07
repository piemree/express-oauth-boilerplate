const User = require("./User.model");
const { db } = require("../database/db");
const { QueryTypes } = require("sequelize");
var UserDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateUser: updateUser,
  findByUsername: findByUsername,
};

async function findAll() {
  const results = await db.query('SELECT * FROM "Users"', {
    type: QueryTypes.SELECT,
  });

  return results;
}

async function findById(id) {
  const result = await db.query(`SELECT * FROM "Users" WHERE id = ${id}`, {
    type: QueryTypes.SELECT,
  });
  return result;
}

async function findByUsername(username) {
  const result = await db.query(
    `SELECT * FROM "Users" WHERE username = '${username}'`,
    {
      type: QueryTypes.SELECT,
    }
  );
  return result;
}

async function deleteById(id) {
  const result = await db.query(`DELETE * FROM "Users" WHERE id = ${id}`, {
    type: QueryTypes.DELETE,
  });
  return result;
}

async function create(user) {
  const result = await db.query(
    `INSERT INTO "Users" ("username","password") VALUES ('${user.username}', '${user.password}')`,
    {
      type: QueryTypes.INSERT,
    }
  );
  return result;
}

function updateUser(user, id) {
  const updateUser = {
    username: user.username,
  };
  return User.update(updateUser, { where: { id: id } });
}
module.exports = UserDao;
