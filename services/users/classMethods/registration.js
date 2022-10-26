const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const { userSchema } = require("../../../models");

const { User } = userSchema;

const { RequestError, sendMail } = require("../../../helpers");

const register = async (user) => {
  const { name, email, password } = user;

  const newUser = await User.findOne({ email });

  if (newUser) {
    throw RequestError(409, "Email in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = uuidv4();

  const result = await User.create({
    name,
    email,
    password: hashedPassword,
    avatarURL,
    verificationToken,
  });

  sendMail("sergiosis@ukr.net", "taniap970@gmail.com", verificationToken);

  return result;
};

module.exports = register;
