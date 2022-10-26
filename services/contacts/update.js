const { contactSchema } = require("../../models");
const { Contact, schemas } = contactSchema;
const { RequestError } = require("../../helpers");

const updateById = async (id, contact) => {
  const { error } = schemas.addSchema.validate(contact);

  if (error) {
    throw RequestError(400, error.message);
  }

  const result = await Contact.findByIdAndUpdate(id, contact);

  if (!result) {
    throw RequestError(404, "Not found");
  }
};

module.exports = updateById;
