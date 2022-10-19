const register = require("./registration");
const signIn = require("./signIn");
const leave = require("./logOut");
const actual = require("./current");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  signIn,
  leave,
  actual,
  updateAvatar,
};
