const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (el) =>
  await fs.writeFile(contactsPath, JSON.stringify(el, null, 2));

console.log("__dirname", __dirname);

const listContacts = async () => {
  const res = await fs.readFile(contactsPath);
  return JSON.parse(res);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const res = contacts.find((el) => el.id === contactId);
  return res || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const elementInd = contacts.findIndex((el) => el.id === contactId);
  if (elementInd === -1) {
    return null;
  }
  const [result] = contacts.splice(elementInd, 1);
  await updateContacts(contacts);
  return result;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();

  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updateContacts(contacts);

  return newContact;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex((el) => el.id === contactId);

  if (contactIndex === -1) {
    return null;
  }
  contacts[contactIndex] = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  await updateContact(contacts);
  return contacts[contactIndex];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
