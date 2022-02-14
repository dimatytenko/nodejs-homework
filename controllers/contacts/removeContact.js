const fs = require("fs/promises");
const readContent = require("./readContent");
const contactsPath = require("../../db/contactsPath");

async function removeContact(contactId) {
  const contacts = await readContent();
  const removeContactById = contacts.find(
    (contact) => contact.id === contactId
  );
  const newContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );
  await fs.writeFile(
    contactsPath,
    JSON.stringify(newContacts, null, 2)
  );
  return removeContactById;
}

module.exports = removeContact;
