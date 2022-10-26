const {
  register,
  signIn,
  leave,
  actual,
  updateAvatar,
  verifyUser,
} = require("./classMethods");

class User {
  registration = async (user) => await register(user);

  logIn = async (user) => await signIn(user);

  logOut = async (user) => await leave(user);

  current = async (user) => await actual(user);

  changeAvatar = async (request) => await updateAvatar(request);

  verify = async (request) => await verifyUser(request);

  repeatVerify = async (request) => await verifyAgain(request);
}

module.exports = new User();
