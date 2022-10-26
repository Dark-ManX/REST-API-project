const { userSchema } = require("../../../models");
const { RequestError, sendMail } = require("../../../helpers");

const { User } = userSchema;

const verifyAgain = async (request) => {
  const user = await User.findOne({ email: request });

  if (!user) {
    throw RequestError(404, "Such email not registered");
  }

  const { verificationToken } = user;

  if (!verificationToken) {
    throw RequestError(400, "User already authorized");
  }

  const result = await sendMail(verificationToken);

  return result;
};

module.exports = verifyAgain;
