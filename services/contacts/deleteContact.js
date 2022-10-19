const { contactSchema } = require("../../models");
const { Contact } = contactSchema;
const { RequestError } = require("../../helpers");

const deleteContact = async (id) => {
  const result = await Contact.findByIdAndRemove(id);

  if (!result) {
    throw RequestError(404, "Not found");
  }

  return result;
};

module.exports = deleteContact;
