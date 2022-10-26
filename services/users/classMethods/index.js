const register = require("./registration");
const signIn = require("./signIn");
const leave = require("./logOut");
const actual = require("./current");
const updateAvatar = require("./updateAvatar");
const verifyUser = require("./verifyUser");

module.exports = {
  register,
  signIn,
  leave,
  actual,
  updateAvatar,
  verifyUser,
};
