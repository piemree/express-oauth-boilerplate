const validator = require("validator");

const { findByEmail, findByUsername } = require("../modules/user/User.service");

module.exports.validateRegister = async function (data) {
  let errors = {};

  if (validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "confirm password is required";
  }

  if (validator.isEmpty(data.username)) {
    errors.username = "username field is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "email is invalid";
  }
  if (!validator.isLength(data.password, { min: 8, max: 16 })) {
    errors.password = "password must between 8 and 16 characters";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "passwords are not match";
  }

  let email = await findByEmail(data.email);
  let login = await findByUsername(data.username);

  if (email) errors.email = "email was used";
  if (login) errors.login = "login was used";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

module.exports.validateLogin = async function (data) {
  let errors = {};

  if (validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "email is invalid";
  }

  if (!validator.isLength(data.password, { min: 8, max: 16 })) {
    errors.password = "password must between 8 and 16 characters";
  }

  let email = await findByEmail(data.email);

  if (!email) errors.email = "email is not registered";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

module.exports.validateResetPassword = function (data) {
  let errors = {};

  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }

  if (!validator.isLength(data.password, { min: 8, max: 16 })) {
    errors.password = "password must between 8 and 16 characters";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "passwords are not match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
