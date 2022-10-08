const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const { RequestError } = require("../helpers");

const tokenChecker = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  const authorizationArr = authorization.split(" ");

  const [bearer, token] = authorizationArr;

  if (bearer !== "Bearer" || !token) {
    throw RequestError(401, "unauthorized");
  }
  const verify = jwt.verify(token, SECRET_KEY);
  console.log("verify", verify);
};

module.exports = tokenChecker;
