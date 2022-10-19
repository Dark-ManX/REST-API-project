const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { userSchema } = require("../../../models");

const { User } = userSchema;

const { RequestError } = require("../../../helpers");

const register = async (user) => {
  const { name, email, password } = user;

  const newUser = await User.findOne({ email });

  if (newUser) {
    throw RequestError(409, "Email in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const result = await User.create({
    name,
    email,
    password: hashedPassword,
    avatarURL,
  });

  return result;
};

module.exports = register;
