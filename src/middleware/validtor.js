const validator = require("validator");

module.exports = function (req, res, next) {
  const { username, email, password } = req.body;

  if (!validator.isEmail(email)) req.validator = "email is not valid";
  if (validator.isLength(password, { min: 8, max: 16 }))
    req.validator = "password length must be between 8 and 16";
  if (validator.isLength(username, { min: 1, max: 16 }))
    req.validator = "username length must be lower than 16 characters";

  next();
};
