const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const contactsPath = path.join(
  __dirname,
  "db/contacts.json"
);

const readContent = async () => {
  const content = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(content);
  return result;
};

async function listContacts() {
  return await readContent();
}

async function getContactById(contactId) {
  const contacts = await readContent();
  const contactById = contacts.find(
    (contact) => contact.id === contactId
  );
  return contactById;
}

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

async function addContact(name, email, phone) {
  const contacts = await readContent();
  const newContact = {
    id: randomUUID(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(
    contactsPath,
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
