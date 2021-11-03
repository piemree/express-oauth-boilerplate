const User = require("./User.model");
const { db } = require("../database/db");
const { QueryTypes } = require("sequelize");
var UserDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateUser: updateUser,
};

async function findAll() {
  const results = await User.sequelize.query('SELECT * FROM "Users"', {
    type: QueryTypes.SELECT,
  });

  return results;
}

async function findById(id) {
  const result = await User.sequelize.query(
    `SELECT * FROM "Users" WHERE id = ${id}`,
    {
      type: QueryTypes.SELECT,
    }
  );
  return result;
}

function deleteById(id) {
  return User.destroy({ where: { id: id } });
}

function create(user) {
  var newUser = new User(user);
  return newUser.save();
}

function updateUser(user, id) {
  const updateUser = {
    username: user.username,
    email: user.email,
  };
  return User.update(updateUser, { where: { id: id } });
}
module.exports = UserDao;
