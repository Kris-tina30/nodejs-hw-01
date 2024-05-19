import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from "fs/promises";
import { getAllContacts } from "./getAllContacts.js";

export const addOneContact = async () => {
  try {
    const contacts = await getAllContacts();
    const newContact = createFakeContact();
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log("Successfully added one new contact.");
  } catch (error) {
    console.error("Error generating contacts:", error);
  }
};

await addOneContact();
