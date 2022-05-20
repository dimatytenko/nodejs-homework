const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./controllers/contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({
  action,
  id,
  name,
  email,
  phone,
}) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contactById = await getContactById(id);
      if (contactById) {
        console.log(contactById);
        return;
      }
      console.log("Not Found");
      break;

    case "add":
      const contact = await addContact(name, email, phone);
      console.log(contact);
      break;

    case "remove":
      const removeContactById = await removeContact(id);
      if (removeContactById) {
        console.log(removeContactById);
        return;
      }
      console.log("Not Found");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
(async () => {
  await invokeAction(argv);
})();
