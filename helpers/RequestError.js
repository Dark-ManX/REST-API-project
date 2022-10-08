const messages = {
  400: "BadRequest",
  401: "Unauthorised",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const RequestError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = RequestError;
