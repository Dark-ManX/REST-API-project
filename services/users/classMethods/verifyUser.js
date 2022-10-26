const { userSchema } = require("../../../models");
const { User } = userSchema;

const { RequestError } = require("../../../helpers");

const verifyUser = async (verifyToken) => {
  const user = await User.findOne({ verificationToken: verifyToken });

  if (!user) {
    throw RequestError(404, "Such user is not found");
  }

  const { _id } = user;

  await User.findByIdAndUpdate(_id, { verificationToken: "", verify: true });

  return user;
};

module.exports = verifyUser;
