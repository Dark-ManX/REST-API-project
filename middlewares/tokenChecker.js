const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const { RequestError } = require("../helpers");

const tokenChecker = async (req, res, next) => {
  const { authorization } = req.headers;
  const authorizationArr = authorization.split(" ");

  const [bearer, token] = authorizationArr;

  if (bearer !== "Bearer" || !token) {
    throw RequestError(401, "unauthorized");
  }

  const user = jwt.verify(token, SECRET_KEY);

  if (!user) {
    throw RequestError(401, "unauthorized");
  }

  next();
};

module.exports = tokenChecker;
