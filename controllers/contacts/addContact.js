const fs = require("fs/promises");
const readContent = require("./readContent");
const contactsPath = require("../../db/contactsPath");
const { randomUUID } = require("crypto");

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

module.exports = addContact;
