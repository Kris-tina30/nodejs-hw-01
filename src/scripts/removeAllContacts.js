import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
    console.log("All contacts have been removed.");
  } catch (error) {
    console.error("Error removing contacts:", error);
  }
};

await removeAllContacts();
