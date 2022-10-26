const jwt = require("jsonwebtoken");

const { userSchema } = require("../../../models");

const { User } = userSchema;

const actual = async (user) => {
  const { authorization } = user;

  const [, token] = authorization.split(" ");
  const { id } = jwt.decode(token);

  const currentUser = await User.findById(id);

  return currentUser;
};

module.exports = actual;
