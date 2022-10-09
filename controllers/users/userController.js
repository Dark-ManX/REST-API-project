// const { registration, logIn, } = require("../../services/users");

const { User } = require("../../services/users");
const { registration, logIn, logOut, current } = User;

const asyncHandler = require("express-async-handler");

class UserController {
  registerUser = asyncHandler(async (req, res, next) => {
    const result = await registration(req.body);

    res.status(201).json({ code: 201, status: "success", result });
  });

  logInUser = asyncHandler(async (req, res, next) => {
    const token = await logIn(req.body);

    res.status(200).json({ code: 200, status: "success", token });
  });

  logOutUser = asyncHandler(async (req, res, next) => {
    await logOut(req.headers);

    res.status(200).json({ code: 200, status: "success" });
  });

  getCurrent = asyncHandler(async (req, res, next) => {
    const user = await current(req.headers);
    const { name, email } = user;

    res.status(200).json({ code: 200, status: "success", name, email });
  });
}

module.exports = new UserController();
