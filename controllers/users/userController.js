// const fs = require("fs/promises");

const { User } = require("../../services/users");
const {
  registration,
  logIn,
  logOut,
  current,
  changeAvatar,
  verify,
  resendVerification,
} = User;

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

  patchAvatar = asyncHandler(async (req, res, next) => {
    const result = await changeAvatar(req);

    res.status(200).json({ code: 200, status: "success" });
  });

  verification = asyncHandler(async (req, res, next) => {
    const { verificationToken } = req.params;

    const result = await verify(verificationToken);

    res.status(200).json({ code: 200, status: "success", result });
  });

  resendVerification = asyncHandler(async (req, res, next) => {
    const { email } = req.body;

    const result = await resendVerification(email);

    res.status(200).json({
      code: 200,
      status: "success",
      result: "Verify message was sent again",
    });
  });
}

module.exports = new UserController();
