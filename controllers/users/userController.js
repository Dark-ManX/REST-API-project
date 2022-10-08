const { registration, logIn } = require("../../services/users");

const asyncHandler = require("express-async-handler");

class UserController {
  registerUser = asyncHandler(async (req, res, next) => {
    const result = await registration(req.body);

    res.status(201).json({ code: 201, status: "success", result });
  });

  logInUser = asyncHandler(async (req, res, next) => {
    const result = await logIn(req.body);

    res.status(200).json({ code: 200, status: "success", token: result });
  });

  getCurrent = asyncHandler(async (res, req, next) => {
    const { name, email } = req.body;

    res.status(200).json({ code: 200, status: "success", name, email });
  });
}

module.exports = new UserController();
