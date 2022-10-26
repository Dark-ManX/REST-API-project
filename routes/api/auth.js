const express = require("express");

const { UserController } = require("../../controllers/users");

const {
  registerUser,
  logInUser,
  logOutUser,
  getCurrent,
  patchAvatar,
  verification,
  resendVerification,
} = UserController;

const { validateBody, tokenChecker, upload } = require("../../middlewares");

const { userSchema } = require("../../models");

const router = express.Router();

const { userLogIn, userRegistration, checkEmail } = userSchema.schemas;

// --------Sign Up----------

router.post("/signup", validateBody(userRegistration), registerUser);

// --------Log In-----------

router.post("/login", validateBody(userLogIn), logInUser);

// ---------Log Out-------------

router.get("/logout", tokenChecker, logOutUser);

// ---------Get Current----------

router.get("/current", tokenChecker, getCurrent);

// ----------Change Avatar-----------

router.patch("/avatars", tokenChecker, upload.single("avatarURL"), patchAvatar);

// ----------Verify User-------------

router.get("/verify/:verificationToken", verification);

// ----------Verify again-------------

router.post("/verify", validateBody(checkEmail), resendVerification);

module.exports = router;
