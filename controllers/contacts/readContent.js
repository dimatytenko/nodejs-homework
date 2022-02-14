const fs = require("fs/promises");
const contactsPath = require("../../db/contactsPath");

const readContent = async () => {
  const content = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(content);
  return result;
};

module.exports = readContent;
