const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { userSchema } = require("../../models");

const { User } = userSchema;

const { RequestError } = require("../../helpers");

require("dotenv").config();

const { SECRET_KEY } = process.env;

const logIn = async (user) => {
  const { email, password } = user;

  const authenticateUser = await User.findOne({ email });

  if (!authenticateUser) {
    throw RequestError(401, "We haven't user with such email");
  }

  const comparedPassword = await bcrypt.compare(
    password,
    authenticateUser.password
  );

  if (!comparedPassword) {
    throw RequestError(401, "Incorrect password");
  }

  const payload = {
    id: user.__id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user.__id, { token });

  return token;
};

module.exports = logIn;