const { register, signIn, leave, actual } = require("./classMethods");

// const asyncHandler = require('express-async-handler');

class User {
  registration = async (user) => {
    const result = await register(user);
    return result;
  };

  logIn = async (user) => {
    const result = await signIn(user);
    return result;
  };

  logOut = async (user) => {
    const result = await leave(user);
    return result;
  };

  current = async (user) => {
    const result = await actual(user);
    return result;
  };
}

module.exports = new User();
