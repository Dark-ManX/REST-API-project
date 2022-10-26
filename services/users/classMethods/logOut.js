const jwt = require("jsonwebtoken");

const { userSchema } = require("../../../models");

const { User } = userSchema;

const leave = async (user) => {
  const { authorization } = user;

  const [, token] = authorization.split(" ");

  const decoded = jwt.decode(token);

  const { id } = decoded;

  const result = await User.findByIdAndUpdate(id, { token: "" });

  return result;
};

module.exports = leave;
