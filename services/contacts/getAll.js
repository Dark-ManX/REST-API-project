const { contactSchema } = require("../../models");
const { Contact } = contactSchema;

const getAll = async () => {
  const result = await Contact.find({});
  return result;
};

module.exports = getAll;
