const bcrypt = require("bcryptjs");

const { userSchema } = require("../../models");

const { User } = userSchema;

const { RequestError } = require("../../helpers");

const registration = async (user) => {
  const { name, email, password } = user;

  const newUser = await User.findOne({ email });

  if (newUser) {
    throw RequestError(409, "Email in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await User.create({ name, email, password: hashedPassword });

  return result;
};

module.exports = registration;
