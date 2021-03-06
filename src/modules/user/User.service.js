const User = require("./User.model");
const _ = require("lodash");
const { hashedPassword, isRightPassword } = require("../../utils/bcrypt");

async function findAll() {
  return await User.findAll();
}

async function findById(id) {
  return await User.findByPk(id);
}

async function findByUsername(username) {
  return await User.findOne({ where: { username: username } });
}

async function findByEmail(email) {
  return await User.findOne({ where: { email: email } });
}

async function deleteById(id) {
  return await User.destroy({ where: { id: id } });
}

async function create(username, email, password) {
  const newUser = {
    username: username,
    email: email,
    password: await hashedPassword(password),
  };
  const user = await User.create(newUser);
  return _.omit(user.dataValues, "password");
}

function updateUser(user, id) {
  const updateUser = {
    username: user.username,
  };
  return User.update(updateUser, { where: { id: id } });
}

async function login(email, password) {
  try {
    const user = await findByEmail(email);
    if (!user) return false;
    const isTruePass = await isRightPassword(password, user.password);
    if (isTruePass) return user.dataValues;
    return false;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function resetPassword(id, password) {
  try {
    const user = await findById(id);
    if (!user) return Promise.reject("User does not exist");
    const hpassword = await hashedPassword(password);
    await user.update({ password: hpassword });
    return await user.save();
  } catch (error) {
    return Promise.reject(error.message);
  }
}

module.exports = {
  findAll,
  create,
  findById,
  deleteById,
  updateUser,
  findByUsername,
  findByEmail,
  login,
  resetPassword,
};
