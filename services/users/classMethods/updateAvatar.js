const { userSchema } = require("../../../models");
const { User } = userSchema;
const fs = require("fs/promises");
const jwt = require("jsonwebtoken");
const path = require("path");

const tempFolder = path.join(__dirname, "..", "..", "..", "temp");

const updateAvatar = async (user) => {
  const { authorization } = user.headers;

  const [, token] = authorization.split(" ");

  const { id } = jwt.decode(token);

  const { path: tempUpload, originalname } = user.file;

  const extention = originalname.split(".");

  const filename = `${id}.${extention}`;

  const resultUpload = path.join(tempFolder, filename);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);

  const result = await User.findByIdAndUpdate(id, { avatarURL });

  return result;
};

module.exports = updateAvatar;
