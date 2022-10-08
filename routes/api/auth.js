const express = require("express");

const { UserController } = require("../../controllers/users");

const { validateBody, tokenChecker } = require("../../middlewares");

const { userSchema } = require("../../models");

const router = express.Router();

const { userLogIn, userRegistration } = userSchema.schemas;

// --------SignUp----------

router.post(
  "/signup",
  validateBody(userRegistration),
  UserController.logInUser
);

// --------SignIn-----------

router.post("/login", validateBody(userLogIn), UserController.logInUser);

// ---------Get current----------

router.get("/current", tokenChecker);

module.exports = router;
