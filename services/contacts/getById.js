const { contactSchema } = require("../../models");
const { Contact } = contactSchema;
const { RequestError } = require("../../helpers");

const getById = async (id) => {
  const result = await Contact.findById(id);

  if (!result) {
    throw RequestError(404, "Not found");
  }
  return result;
};

module.exports = getById;
