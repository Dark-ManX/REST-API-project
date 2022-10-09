const express = require("express");

const { UserController } = require("../../controllers/users");

const { registerUser, logInUser, logOutUser, getCurrent } = UserController;

const { validateBody, tokenChecker } = require("../../middlewares");

const { userSchema } = require("../../models");

const router = express.Router();

const { userLogIn, userRegistration } = userSchema.schemas;

// --------Sign Up----------

router.post("/signup", validateBody(userRegistration), registerUser);

// --------Log In-----------

router.post("/login", validateBody(userLogIn), logInUser);

// ---------Log Out-------------

router.get("/logout", tokenChecker, logOutUser);

// ---------Get Current----------

router.get("/current", tokenChecker, getCurrent);

module.exports = router;
