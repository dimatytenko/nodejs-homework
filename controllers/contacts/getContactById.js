const readContent = require("./readContent");

async function getContactById(contactId) {
  const contacts = await readContent();
  const contactById = contacts.find(
    (contact) => contact.id === contactId
  );
  return contactById;
}

module.exports = getContactById;
