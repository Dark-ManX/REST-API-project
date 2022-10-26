const express = require("express");

const { ContactsController } = require("../../controllers/contacts");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
} = ContactsController;

const { isValidId, validateBody, tokenChecker } = require("../../middlewares");

const { contactSchema } = require("../../models");

const router = express.Router();

router.get("/", tokenChecker, listContacts);

router.get("/:contactId", tokenChecker, isValidId, getContactById);

router.post(
  "/",
  tokenChecker,
  validateBody(contactSchema.addSchema),
  addContact
);

router.delete("/:contactId", isValidId, removeContact);

router.put(
  "/:contactId",
  tokenChecker,
  isValidId,
  validateBody(contactSchema.addSchema),
  updateContact
);

router.put("/:contactId/favorite", tokenChecker, isValidId, updateFavorite);

module.exports = router;
