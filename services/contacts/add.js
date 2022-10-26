const { contactSchema } = require("../../models");
const { Contact, schemas } = contactSchema;
const { RequestError } = require("../../helpers");

const add = async (contact) => {
  const { error } = schemas.addSchema.validate(contact);

  if (error) {
    throw RequestError(400, error.message);
  }
  const result = await Contact.create(contact);
  return result;
};

module.exports = add;
