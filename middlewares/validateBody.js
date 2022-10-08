const { RequestError } = require("../helpers");

const validateBody = (schema) => {
  const checker = (req, res, next) => {
    const { err } = schema.validate(req.body);

    if (err) {
      next(RequestError(400, err.message));
    }

    next();
  };

  return checker;
};

module.exports = validateBody;
