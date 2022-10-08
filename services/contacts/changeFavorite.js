const { RequestError } = require("../../helpers");
const { contactSchema } = require("../../models");
const { Contact, schemas } = contactSchema;

const setFavorite = async (id, contact) => {
  const { error } = schemas.setFavoriteSchema.validate(contact);

  if (error) {
    throw RequestError(400, error.message);
  }

  const result = await Contact.findByIdAndUpdate(id, contact);

  if (!result) {
    throw RequestError(404, "Not found");
  }
};

module.exports = setFavorite;
