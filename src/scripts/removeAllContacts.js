import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2), 'utf8');
    console.log('Contacts deleted successfully.');
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();

