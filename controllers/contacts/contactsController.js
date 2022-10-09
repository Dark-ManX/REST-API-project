const asyncHandler = require("express-async-handler");

const { getAll } = require("../../services/contacts");

class ContactsController {
  /* eslint-disable */
  listContacts = asyncHandler(async (req, res, next) => {
    const result = await getAll();

    res.status(200).json({ code: 200, status: "success", payload: { result } });
  });

  getContactById = asyncHandler(async (req, res, next) => {
    const { contactId } = req.params;
    const result = await getById(contactId);

    res.status(200).json({ code: 200, status: "success", payload: { result } });
  });

  addContact = asyncHandler(async (req, res, next) => {
    const result = await add(req.body);

    res.status(201).json({ code: 201, status: "success", payload: { result } });
  });

  removeContact = asyncHandler(async (req, res, next) => {
    const { contactId } = req.params;
    const result = await deleteContact(contactId);
    res.status(200).json({ code: 200, status: "success", payload: { result } });
  });

  updateContact = asyncHandler(async (req, res, next) => {
    const { contactId } = req.params;
    const result = await updateById(contactId, req.body, { new: true });
    res.status(200).json({ code: 200, status: "success", payload: { result } });
  });

  updateFavorite = asyncHandler(async (req, res, next) => {
    const { contactId } = req.params;
    const result = await changeFavorite(contactId, req.body, { new: true });
    res.status(200).json({ code: 200, status: "success", payload: { result } });
  });
}

module.exports = new ContactsController();
