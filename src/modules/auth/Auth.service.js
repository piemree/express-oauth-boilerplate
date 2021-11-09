const { findByUsername } = require("../user/User.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JwtPrivateKey } = require("../../configs");
const expiresIn = 36000;

module.exports.generateToken = async (user) => {
  return jwt.sign(JSON.stringify(user), JwtPrivateKey);
};

module.exports.checkUserAndCreateToken = async (user) => {
  const usr = await findByUsername(user.username);
  if (!usr) return false;
  try {
    await bcrypt.compare(user.password, usr.password);
  } catch (error) {
    return false;
  }
  return jwt.sign(user, JwtPrivateKey);
};
