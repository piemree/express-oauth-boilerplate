const { findById } = require("../User/User.service");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_PRIVATE_KEY || "secret";
const expiresIn = 36000;

module.exports.generateTokenAndSetCooike = async (req) => {
  const jwtToken = jwt.sign(req.user, jwtSecret, { expiresIn: expiresIn });
  req.cookie("token", jwtToken, { expire: expiresIn + Date.now() });
};

module.exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    return false;
  }
  return;
};

module.exports.isUserExists = (req) => {
  findById;
};
