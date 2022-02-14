const readContent = require("./readContent");

async function listContacts() {
  return await readContent();
}

module.exports = listContacts;
