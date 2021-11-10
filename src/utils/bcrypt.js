const bcrypt = require("bcrypt");

module.exports.hashedPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(8);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.isRightPassword = async (plainTextPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  } catch (error) {
    throw new Error(error.message);
  }
};
